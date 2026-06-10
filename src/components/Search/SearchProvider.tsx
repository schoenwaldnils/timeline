'use client'
import { liteClient as algoliasearch } from 'algoliasearch/lite'
import { FC, ReactNode } from 'react'
import { InstantSearch } from 'react-instantsearch'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY ?? '',
)

export const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <InstantSearch
    indexName="person"
    searchClient={searchClient}
    future={{ preserveSharedStateOnUnmount: true }}
  >
    {children}
  </InstantSearch>
)

export default SearchProvider
