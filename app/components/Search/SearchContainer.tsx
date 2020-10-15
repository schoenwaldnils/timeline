import React, { useRef } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { SearchProvider } from './SearchProvider'

import { useClickOutside } from '../../hooks/useClickOutside'
import { useStore, CHANGE_CONTENT } from '../Store'
import { Tooltip } from '../Tooltip'

const CustomSearch = ({ currentRefinement, refine }) => {
  const { dispatch } = useStore()
  const ref = useRef()

  const changeContent = newId => {
    dispatch({
      type: CHANGE_CONTENT,
      contentId: newId,
    })
  }

  useClickOutside(ref, () => {
    refine('')
  })

  const handleSearchValueChange = (newValue: string) => {
    refine(newValue)
  }

  const handleHitSelect = (id: string) => {
    changeContent(id)
    refine('')
  }

  return (
    <div ref={ref}>
      <SearchBar
        searchValue={currentRefinement}
        setSearchValue={handleSearchValueChange}
      />
      {currentRefinement && (
        <Tooltip>
          <SearchHits selectHit={handleHitSelect} />
        </Tooltip>
      )}
    </div>
  )
}

const SearchBox = connectSearchBox(CustomSearch)

export const SearchContainer: React.FC = () => {
  return (
    <SearchProvider>
      <SearchBox />
    </SearchProvider>
  )
}

export default SearchContainer
