#!/usr/bin/env tsx
/**
 * Full Algolia reindex from Payload. Run once after a content import, or any
 * time the indices drift:
 *
 *   pnpm reindex:algolia
 *
 * Builds one record per person/time/event (with `name_en`/`name_de`) and atomically
 * replaces each Algolia index via `replaceAllObjects`.
 */
import dotenv from 'dotenv'

import type { SearchableCollection } from '../src/collections/hooks/algolia.js'

dotenv.config()

const COLLECTIONS: SearchableCollection[] = ['person', 'time', 'event']

const main = async () => {
  const { getPayload } = await import('payload')
  const config = (await import('../src/payload.config.js')).default
  const payload = await getPayload({ config })

  const { getAlgoliaClient, toAlgoliaRecord } = await import('../src/collections/hooks/algolia.js')
  const client = getAlgoliaClient()
  if (!client) {
    console.error('❌ ALGOLIA_APPLICATION_ID / ALGOLIA_ADMIN_API_KEY not set — nothing to do.')
    process.exit(1)
  }

  for (const collection of COLLECTIONS) {
    const [en, de] = await Promise.all([
      payload.find({ collection, locale: 'en', depth: 1, pagination: false, limit: 0 }),
      payload.find({ collection, locale: 'de', depth: 0, pagination: false, limit: 0 }),
    ])
    const deName = new Map(de.docs.map((doc) => [doc.id, doc.name]))
    const objects = en.docs.map((doc) =>
      toAlgoliaRecord(collection, doc, deName.get(doc.id) ?? doc.name),
    )
    await client.replaceAllObjects({ indexName: collection, objects })
    console.info(`🔎 ${collection}: indexed ${objects.length} records`)
  }

  console.info('✅ Algolia reindex complete.')
  process.exit(0)
}

main().catch((error: unknown) => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})
