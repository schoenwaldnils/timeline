import algoliasearch from 'algoliasearch/lite'
import { FC } from 'react'
import { InstantSearch } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  'P7R800RWY1',
  '1cc2cbd4cb591bff961c96a29a782ff5',
)

export const SearchProvider: FC = ({ children }) => (
  <InstantSearch indexName="person" searchClient={searchClient}>
    {children}
  </InstantSearch>
)

export default SearchProvider
