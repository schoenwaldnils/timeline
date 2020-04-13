import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { T } from '../../js/translate'
import { shades } from '../../js/colors'

const Wrapper = styled.input`
  width: 12rem;
  max-width: 100%;
  height: 2rem;
  padding: 0.5em 0.75em;
  border: 1px solid ${shades.cb6};
  border-radius: 4px;
`

export const SearchBar = ({ searchValue, setSearchValue }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <form noValidate action="" role="search">
      <Wrapper
        ref={inputRef}
        type="search"
        value={searchValue}
        placeholder={T('ui.search')}
        onChange={event => setSearchValue(event.currentTarget.value)}
      />
    </form>
  )
}
