import { Search } from './Search'
import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'

export default {
  title: 'Search',
  component: Search,
}

export const search = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
  >
    <Search />
    <SearchBar />
    <SearchHits />
  </div>
)
