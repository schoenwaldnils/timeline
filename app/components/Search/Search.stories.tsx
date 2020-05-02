import React from 'react'

import styled from '@emotion/styled'
import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { Search } from './Search'

export default {
  title: 'Search',
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }
`

export const Basic = () => (
  <Container>
    <Search />
    <SearchBar searchValue="" setSearchValue={() => null} />
    <SearchHits selectHit={() => null} />
  </Container>
)
