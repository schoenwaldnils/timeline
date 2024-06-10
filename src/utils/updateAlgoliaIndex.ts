import algoliasearch from 'algoliasearch'

import { AlgoliaPerson } from './getAlgoliaObject'

interface Options {
  applicationId: string
  apiKey: string
  indexName: 'person' | 'timespan' | 'event'
}

export interface AlgoliaError {
  name: string
  message: string
  status: number
}

export const updateAlgoliaIndex = async (
  entries: AlgoliaPerson[],
  { applicationId, apiKey, indexName }: Options,
): Promise<string[]> => {
  const clientAlgolia = algoliasearch(applicationId, apiKey)
  const index = clientAlgolia.initIndex(indexName)

  return await index
    .partialUpdateObjects(entries, { createIfNotExists: true })
    .then(({ objectIDs }) => {
      return objectIDs
    })
    .catch((error: AlgoliaError) => {
      throw error
    })
}
