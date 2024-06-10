'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { ReactComponent as SearchIcon } from '../../svgs/searchIcon.svg'
import { ClickAwayListener } from '../ClickAwayListener'
import css from './Search.module.css'
import { SearchContainer } from './SearchContainer'

export const Search = () => {
  const t = useTranslations()
  const [isActive, setIsActive] = useState(false)

  if (isActive) {
    return (
      <ClickAwayListener onClickAway={() => setIsActive(false)}>
        <div className={css.Search}>
          <SearchContainer onHitClick={() => setIsActive(false)} />
        </div>
      </ClickAwayListener>
    )
  }

  return (
    <button
      className={css.Search_button}
      aria-label={t('ui.search')}
      onClick={() => setIsActive(true)}
    >
      <SearchIcon />
    </button>
  )
}
