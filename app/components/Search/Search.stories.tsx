import React from 'react'

import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { Search } from './Search'

export default {
  title: 'Search',
}

export const Bar = () => (
  <SearchBar searchValue="" setSearchValue={() => null} />
)

export const Hits = () => <SearchHits selectHit={() => null} />

export const Composed = () => <Search />
