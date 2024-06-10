import { Asset, AssetFile, Entry, EntryFieldTypes } from 'contentful'

export type EntrySkeleton = {
  contentTypeId: 'person' | 'timespan' | 'event'
  fields: {
    name: EntryFieldTypes.Text
    image: Asset<'WITH_ALL_LOCALES'>
  }
}

export interface AlgoliaPerson {
  objectID: string
  name_en: string
  name_de: string
  imageUrl?: string
}

export const getAlgoliaObject = (
  entry: Entry<EntrySkeleton, 'WITH_ALL_LOCALES', string>,
): AlgoliaPerson => {
  if (!entry.fields.name.en || !entry.fields.name.de) {
    throw new Error('No name field')
  }

  const imageUrl = (
    (entry.fields.image.en as unknown as Asset).fields.file as {
      [x: string]: AssetFile
    }
  )?.en?.url

  return {
    objectID: entry.sys.id,
    name_en: entry.fields.name.en,
    name_de: entry.fields.name.de,
    imageUrl,
  }
}
