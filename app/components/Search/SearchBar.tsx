import styled from '@emotion/styled'
import { FC, useEffect, useRef } from 'react'

import { shades } from '../../data/colors'
import { useTranslation } from '../../hooks/useTranslation'

const Wrapper = styled.input`
  width: 12rem;
  max-width: 100%;
  height: 2rem;
  padding: 0.5em 0.75em;
  font-size: 1rem;
  border: 1px solid ${shades.cb6};
  border-radius: 4px;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;

  :focus {
    outline: 0;
  }
`

export const SearchBar: FC<{
  searchValue: string
  setSearchValue: (value: string) => void
}> = ({ searchValue, setSearchValue }) => {
  const { t } = useTranslation()
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
        placeholder={`${t('ui.search')}...`}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </form>
  )
}
