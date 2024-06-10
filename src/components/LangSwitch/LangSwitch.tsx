'use client'

import { ClickAwayListener } from '@material-ui/core'
import { useState } from 'react'

import { useStore } from '@/hooks/useStore'

import { LangSwitchView } from './LangSwitchView'

export const LangSwitch = () => {
  const locale = useStore((state) => state.locale)
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => setIsActive(!isActive)

  const handleButtonClick = (newLocale: string) => {
    if (locale === newLocale) {
      return
    }

    setIsActive(false)
  }

  return (
    <ClickAwayListener onClickAway={() => isActive && setIsActive(false)}>
      <LangSwitchView
        isActive={isActive}
        toggleIsActive={toggleIsActive}
        handleButtonClick={handleButtonClick}
        currentLocale={locale}
      />
    </ClickAwayListener>
  )
}
