import { FC } from 'react'
import { useHits } from 'react-instantsearch-hooks'

import { Tooltip } from '@/components/Tooltip'

import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { SearchProvider } from './SearchProvider'

const SearchBox: FC<{ onHitClick: () => void }> = ({ onHitClick }) => {
  const { results } = useHits()

  return (
    <>
      <SearchBar />
      {results.query && (
        <Tooltip>
          <SearchHits onHitClick={onHitClick} />
        </Tooltip>
      )}
    </>
  )
}

export const SearchContainer: FC<{ onHitClick: () => void }> = ({
  onHitClick,
}) => {
  return (
    <SearchProvider>
      <SearchBox onHitClick={onHitClick} />
    </SearchProvider>
  )
}

export default SearchContainer
