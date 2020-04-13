import { createClient } from 'contentful'
import { getAlgoliaObject } from './utils/getAlgoliaObject'
import { updateAlgoliaIndex } from './utils/updateAlgoliaIndex'

export const indexAlgolia = async (event, _context, callback) => {
  let statusCode = 200

  console.log(event.body)

  const payload = event.body && JSON.parse(event.body)

  const { entityId, indexName } = payload

  /**
   * CONTENTUFL
   */
  const clientContentful = createClient({
    space: event.headers.spaceId,
    accessToken: event.headers.contentfulToken,
  })

  const select = ['sys.id', 'fields.name', 'fields.image'].join(',')

  const entrys: any = await clientContentful
    .getEntries({
      content_type: indexName,
      'sys.id': entityId,
      select,
      locale: '*',
    })
    .catch(err => {
      statusCode = 502
      console.error(err)
    })

  const entry = entrys.items.length && entrys.items[0]

  const algoliaEntry = getAlgoliaObject(entry)

  updateAlgoliaIndex([algoliaEntry], {
    applicationId: event.headers['X-Algolia-Application-Id'],
    apiKey: event.headers['X-Algolia-API-Key'],
    indexName,
  })

  const response = {
    statusCode,
    headers: {},
    body: null,
  }

  callback(null, response)
}
