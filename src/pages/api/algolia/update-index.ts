import { createClient } from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'

import { Entry, getAlgoliaObject } from '@/utils/getAlgoliaObject'
import { updateAlgoliaIndex } from '@/utils/updateAlgoliaIndex'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {
    entityId,
    indexName,
  }: { entityId: string; indexName: 'person' | 'timespan' | 'event' } = req.body

  /**
   * CONTENTUFL
   */
  const clientContentful = createClient({
    space: req.headers.spaceid as string,
    accessToken: req.headers.contentfultoken as string,
  })

  const select = ['sys.id', 'fields.name', 'fields.image'].join(',')

  const entries = await clientContentful
    .getEntries({
      content_type: indexName,
      'sys.id': entityId,
      select,
      locale: '*',
    })
    .catch((error) => {
      res.status(502).json({
        error,
      })
      throw error
    })

  const entry = entries.items.length && entries.items[0]

  const algoliaEntry = getAlgoliaObject(entry as Entry)

  const updateRes = await updateAlgoliaIndex([algoliaEntry], {
    applicationId: req.headers['x-algolia-application-id'] as string,
    apiKey: req.headers['x-algolia-api-key'] as string,
    indexName,
  }).catch((error) => {
    res.status(502).json({
      error,
    })
    throw error
  })

  res.status(200).send(`Updated index: ${updateRes.join()}`)
}
