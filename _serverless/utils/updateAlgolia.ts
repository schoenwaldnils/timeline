import { createClient } from 'contentful'
import { updateAlgoliaIndex } from './updateAlgoliaIndex'
import { getAlgoliaObject } from './getAlgoliaObject'

/**
 *
 */
;(async () => {
  const clientContentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN,
  })

  const select = ['sys.id', 'fields.name', 'fields.image'].join(',')

  const entrys = await clientContentful
    .getEntries({
      content_type: 'time',
      select,
      locale: '*',
      limit: 1000,
    })
    .catch(err => {
      throw new Error(err)
    })

  const algoliaEntrys =
    entrys.items.length &&
    entrys.items.map(({ ...entry }) => getAlgoliaObject(entry))

  console.log(algoliaEntrys)

  updateAlgoliaIndex(algoliaEntrys, {
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: 'timespan',
  })
})()
