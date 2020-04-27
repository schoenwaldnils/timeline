import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import { connectSearchBox } from 'react-instantsearch-dom'

import { ReactComponent as SearchIcon } from './searchIcon.svg'

import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { T } from '../../js/translate'

import { zIndexes } from '../../data/constants'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { useStore, SET_SIDEBAR_ACTIVE } from '../Store'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const Hits = styled.div`
  position: absolute;
  top: calc(100% + 7px);
  right: 0;
  left: 0;
  z-index: ${zIndexes.searchHits};
  max-height: 70vh;
  padding: 0.25rem;
  overflow: auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;
`

const Icon = styled(SearchIcon)`
  font-size: 1.25rem;

  > path {
    fill: currentColor;
  }
`

export const CustomSearch = ({ currentRefinement, refine }) => {
  const [isActive, setIsActive] = useState(false)
  const [, dispatch] = useStore()
  const ref = useRef()

  const changeContent = newId => {
    dispatch({
      type: SET_SIDEBAR_ACTIVE,
      contentId: newId,
    })
  }

  useClickOutside(ref, () => {
    refine('')
    setIsActive(false)
  })

  const handleSearchValueChange = (newValue: string) => {
    refine(newValue)
  }

  const handleHitSelect = (id: string) => {
    changeContent(id)
    refine('')
    setIsActive(false)
  }

  if (isActive) {
    return (
      <Wrapper ref={ref}>
        <SearchBar
          searchValue={currentRefinement}
          setSearchValue={handleSearchValueChange}
        />
        {currentRefinement && (
          <Hits>
            <SearchHits selectHit={handleHitSelect} />
          </Hits>
        )}
      </Wrapper>
    )
  }

  return (
    <Icon
      role="button"
      aria-label={T('ui.search')}
      onClick={() => setIsActive(true)}
    />
  )
}

export const Search = connectSearchBox(CustomSearch)
