export interface Entry {
  sys: {
    id: string
  }
  fields: {
    name: {
      en: string
      de: string
    }
    image?: {
      en: {
        fields: {
          file: {
            en: {
              url: string
            }
          }
        }
      }
    }
  }
}

export interface AlgoliaPerson {
  objectID: string
  name_en: string
  name_de: string
  imageUrl?: string
}

export const getAlgoliaObject = (entry: Entry): AlgoliaPerson => {
  return {
    objectID: entry.sys.id,
    name_en: entry.fields.name.en,
    name_de: entry.fields.name.de,
    imageUrl: entry.fields.image && entry.fields.image.en.fields.file.en.url,
  }
}
