'use client'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef } from 'react'
import { useSearchBox } from 'react-instantsearch-hooks'

import css from './Search.module.css'

export const SearchBar = () => {
  const { query, refine, clear } = useSearchBox()

  const t = useTranslations()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const onChange = useCallback(
    (value?: string) => {
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
      <input
        className={css.Search_input}
        ref={inputRef}
        type="search"
        value={query}
        placeholder={`${t('ui.search')}...`}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </form>
  )
}
