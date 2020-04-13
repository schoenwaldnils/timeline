import algoliasearch from 'algoliasearch'
import { AlgoliaPerson } from './getAlgoliaObject'

interface Options {
  applicationId: string
  apiKey: string
  indexName: 'person' | 'timespan' | 'event'
}

export const updateAlgoliaIndex = (
  entries: Array<AlgoliaPerson>,
  { applicationId, apiKey, indexName }: Options,
) => {
  const clientAlgolia = algoliasearch(applicationId, apiKey)
  const index = clientAlgolia.initIndex(indexName)

  index
    .partialUpdateObjects(entries, { createIfNotExists: true })
    .then(({ objectIDs }) => {
      console.log({ objectIDs })
    })
    .catch(console.error)
}
