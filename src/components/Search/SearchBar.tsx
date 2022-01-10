import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import { FC, useCallback, useEffect, useRef } from 'react'
import { useSearchBox } from 'react-instantsearch-hooks'

import { shades } from '@/data/colors'

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

export const SearchBar: FC = () => {
  const { query, refine, clear } = useSearchBox()

  const { t } = useTranslation()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onChange = useCallback(
    (value) => {
      if (value) {
        refine(value)
      } else {
        clear()
      }
    },
    [clear, refine],
  )

  return (
    <form noValidate action="" role="search">
      <Wrapper
        ref={inputRef}
        type="search"
        value={query}
        placeholder={`${t('ui.search')}...`}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </form>
  )
}
