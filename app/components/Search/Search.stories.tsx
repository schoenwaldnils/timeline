import React from 'react'

import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { Search } from './Search'

export default {
  title: 'Search',
}

export const Bar = () => <SearchBar />

export const Hits = () => <SearchHits />

export const Composed = () => <Search />
