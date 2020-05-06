import React, { useState, useRef } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside'
import { LangSwitchView } from './LangSwitchView'
import { useLocale } from '../../context/LocaleContext'
import { Locale } from '../../utils/intl/intlConsts'

export const LangSwitch: React.FC = () => {
  const { locale, setLocale } = useLocale()
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useClickOutside(ref, () => {
    if (isActive) setIsActive(false)
  })

  const toggleIsActive = () => setIsActive(!isActive)

  const handleButtonClick = (newLocale: Locale) => {
    setLocale(newLocale)
    setIsActive(false)
  }

  return (
    <LangSwitchView
      isActive={isActive}
      toggleIsActive={toggleIsActive}
      handleButtonClick={handleButtonClick}
      currentLocale={locale}
      ref={ref}
    />
  )
}
