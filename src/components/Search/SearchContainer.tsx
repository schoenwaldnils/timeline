import { useHits } from 'react-instantsearch'

import { Tooltip } from '@/components/Tooltip'

import css from './Search.module.css'
import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { SearchProvider } from './SearchProvider'

const SearchBox = ({ onHitClick }: { onHitClick: () => void }) => {
  const { results } = useHits()

  return (
    <div className={css.Search}>
      <SearchBar />
      {results?.query && (
        <Tooltip>
          <SearchHits onHitClick={onHitClick} />
        </Tooltip>
      )}
    </div>
  )
}

export const SearchContainer = ({ onHitClick }: { onHitClick: () => void }) => {
  return (
    <SearchProvider>
      <SearchBox onHitClick={onHitClick} />
    </SearchProvider>
  )
}
