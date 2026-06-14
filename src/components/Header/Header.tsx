'use client'

import { Filter } from '@/components/Filter'
import { LangSwitch } from '@/components/LangSwitch'
import { Logo } from '@/components/Logo'
import { Search } from '@/components/Search'

import css from './Header.module.css'

export const Header = () => (
  <header className={css.Header}>
    <Logo />
    <nav className={css.Header_nav}>
      <Search />
      <Filter />
      <LangSwitch />
    </nav>
  </header>
)
