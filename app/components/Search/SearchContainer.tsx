import { ClickAwayListener } from '@material-ui/core'
import { FC } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import { CHANGE_CONTENT, useStore } from '../Store'
import { Tooltip } from '../Tooltip'
import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { SearchProvider } from './SearchProvider'

const CustomSearch = ({ currentRefinement, refine }) => {
  const { dispatch } = useStore()

  const changeContent = (newId) => {
    dispatch({
      type: CHANGE_CONTENT,
      contentId: newId,
    })
  }

  const clearSearch = () => {
    refine('')
  }

  const handleSearchValueChange = (newValue: string) => {
    refine(newValue)
  }

  const handleHitSelect = (id: string) => {
    changeContent(id)
    clearSearch()
  }

  return (
    <ClickAwayListener onClickAway={clearSearch}>
      <SearchBar
        searchValue={currentRefinement}
        setSearchValue={handleSearchValueChange}
      />
      {currentRefinement && (
        <Tooltip>
          <SearchHits selectHit={handleHitSelect} />
        </Tooltip>
      )}
    </ClickAwayListener>
  )
}

const SearchBox = connectSearchBox(CustomSearch)

export const SearchContainer: FC = () => {
  return (
    <SearchProvider>
      <SearchBox />
    </SearchProvider>
  )
}

export default SearchContainer
