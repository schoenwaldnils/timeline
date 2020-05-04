import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import { connectSearchBox } from 'react-instantsearch-dom'

import { ReactComponent as SearchIcon } from './searchIcon.svg'

import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { T } from '../../js/translate'

import { useClickOutside } from '../../customHooks/useClickOutside'
import { useStore, CHANGE_CONTENT } from '../Store'
import { Tooltip } from '../Tooltip'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
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
      type: CHANGE_CONTENT,
      contentId: newId,
    })
  }

  useClickOutside(ref, () => {
    if (isActive) {
      refine('')
      setIsActive(false)
    }
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
          <Tooltip>
            <SearchHits selectHit={handleHitSelect} />
          </Tooltip>
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
