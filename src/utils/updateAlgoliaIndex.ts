import algoliasearch from 'algoliasearch'

import { AlgoliaPerson } from './getAlgoliaObject'

interface Options {
  applicationId: string
  apiKey: string
  indexName: 'person' | 'timespan' | 'event'
}

export const updateAlgoliaIndex = async (
  entries: AlgoliaPerson[],
  { applicationId, apiKey, indexName }: Options,
): Promise<string[]> => {
  const clientAlgolia = algoliasearch(applicationId, apiKey)
  const index = clientAlgolia.initIndex(indexName)

  let result: string[]

  await index
    .partialUpdateObjects(entries, { createIfNotExists: true })
    .then(({ objectIDs }) => {
      result = objectIDs
    })
    .catch((error) => {
      throw error
    })

  return result
}
