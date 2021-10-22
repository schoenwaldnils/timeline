import { FC } from 'react'

import { Tooltip } from '../Tooltip'
import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { SearchProvider } from './SearchProvider'

const SearchBox: FC<{ onHitClick: () => void }> = ({ onHitClick }) => {
  return (
    <>
      <SearchBar />
      <Tooltip>
        <SearchHits onHitClick={onHitClick} />
      </Tooltip>
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
