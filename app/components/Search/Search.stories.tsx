import styled from '@emotion/styled'
import { FC } from 'react'

import { Search } from './Search'
import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'

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

export const Basic: FC = () => (
  <Container>
    <Search />
    <SearchBar searchValue="" setSearchValue={() => null} />
    <SearchHits selectHit={() => null} />
  </Container>
)
