import { type Algoliasearch, algoliasearch } from 'algoliasearch'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import type { Event, Media, Person, Time } from '@/payload-types'

export type SearchableCollection = 'person' | 'time' | 'event'

export type AlgoliaRecord = {
  objectID: string
  name_en: string
  name_de: string
  imageUrl?: string
  year?: number
  wolLink_en?: string
  wolLink_de?: string
}

let cachedClient: Algoliasearch | null | undefined

/** Admin Algolia client, or `null` when disabled / not configured (hooks no-op). */
export const getAlgoliaClient = (): Algoliasearch | null => {
  // Bulk scripts (e.g. the Contentful import) set this to avoid per-record writes;
  // a full `pnpm reindex:algolia` handles indexing instead.
  if (process.env.DISABLE_ALGOLIA === 'true') return null
  if (cachedClient !== undefined) return cachedClient
  const appId = process.env.ALGOLIA_APPLICATION_ID
  const adminKey = process.env.ALGOLIA_ADMIN_API_KEY
  cachedClient = appId && adminKey ? algoliasearch(appId, adminKey) : null
  return cachedClient
}

const imageUrlOf = (image: number | Media | null | undefined): string | undefined =>
  image && typeof image === 'object' && image.url ? image.url : undefined

/** Build a search record from the English document plus the German `name`. */
export const toAlgoliaRecord = (
  collection: SearchableCollection,
  en: Person | Time | Event,
  deName: string,
): AlgoliaRecord => {
  const record: AlgoliaRecord = {
    objectID: String(en.id),
    name_en: en.name,
    name_de: deName,
    imageUrl: imageUrlOf(en.image),
  }

  if (collection === 'event' && 'year' in en) {
    record.year = en.year
    // `wolLink` is non-localized, so both locale fields share the same value.
    record.wolLink_en = en.wolLink ?? undefined
    record.wolLink_de = en.wolLink ?? undefined
  }

  return record
}

type AnyDoc = Event | Person | Time

export const algoliaAfterChange: CollectionAfterChangeHook<AnyDoc> = async ({
  collection,
  context,
  doc,
  req,
}) => {
  if (context?.skipAlgolia) return doc

  const client = getAlgoliaClient()
  if (!client) return doc

  const indexName = collection.slug as SearchableCollection

  try {
    const [en, de] = (await Promise.all([
      req.payload.findByID({ collection: indexName, id: doc.id, locale: 'en', depth: 1 }),
      req.payload.findByID({ collection: indexName, id: doc.id, locale: 'de', depth: 0 }),
    ])) as [AnyDoc, AnyDoc]
    await client.saveObjects({ indexName, objects: [toAlgoliaRecord(indexName, en, de.name)] })
  } catch (error) {
    req.payload.logger.error({ err: error, msg: `Algolia upsert failed: ${indexName}/${doc.id}` })
  }

  return doc
}

export const algoliaAfterDelete: CollectionAfterDeleteHook<AnyDoc> = async ({
  collection,
  context,
  doc,
  id,
  req,
}) => {
  if (context?.skipAlgolia) return doc

  const client = getAlgoliaClient()
  if (!client) return doc

  const indexName = collection.slug as SearchableCollection

  try {
    await client.deleteObjects({ indexName, objectIDs: [String(id)] })
  } catch (error) {
    req.payload.logger.error({ err: error, msg: `Algolia delete failed: ${indexName}/${id}` })
  }

  return doc
}
