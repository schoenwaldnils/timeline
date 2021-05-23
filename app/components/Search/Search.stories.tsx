import styled from '@emotion/styled'
import { FC } from 'react'

import { Search as SearchComponent } from './Search'
import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'

export default {
  title: 'Search',
  component: SearchComponent,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }
`

export const Search: FC = () => (
  <Container>
    <SearchComponent />
    <SearchBar searchValue="" setSearchValue={() => null} />
    <SearchHits selectHit={() => null} />
  </Container>
)
