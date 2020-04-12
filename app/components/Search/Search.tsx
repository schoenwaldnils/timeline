import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import { connectSearchBox } from 'react-instantsearch-dom'
import { IoIosSearch } from 'react-icons/io'

import { SearchBar } from './SearchBar'
import { SearchHits } from './SearchHits'
import { SidebarContext } from '../Sidebar/SidebarContext'
import { shades } from '../../js/colors'
import { zIndexes } from '../../data/constants'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const Hits = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  right: 0;
  left: 0;
  z-index: ${zIndexes.searchHits};
  max-height: 70vh;
  padding: 0.25rem;
  overflow: auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0.25rem 0.25rem 0 #0003;
`

const Icon = styled(IoIosSearch)`
  margin-right: 0.25em;
  font-size: 1.5rem;
  color: ${shades.cb3};
`

export const CustomSearch = ({ currentRefinement, refine }) => {
  const [isActive, setIsActive] = useState(false)
  const { changeContent } = useContext(SidebarContext)

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
      <Wrapper>
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

  return <Icon role="button" onClick={() => setIsActive(true)} />
}

export const Search = connectSearchBox(CustomSearch)
