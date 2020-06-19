import React, { useState, useRef } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside'
import { LangSwitchView } from './LangSwitchView'
import { Locale } from '../../utils/intl/intlConsts'
import { useStore, SET_LOCALE } from '../Store'

export const LangSwitch: React.FC = () => {
  const [state, dispatch] = useStore()
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useClickOutside(ref, () => {
    if (isActive) setIsActive(false)
  })

  const toggleIsActive = () => setIsActive(!isActive)

  const handleButtonClick = (newLocale: Locale) => {
    dispatch({
      type: SET_LOCALE,
      locale: newLocale,
    })
    setIsActive(false)
  }

  return (
    <LangSwitchView
      isActive={isActive}
      toggleIsActive={toggleIsActive}
      handleButtonClick={handleButtonClick}
      currentLocale={state.locale}
      ref={ref}
    />
  )
}
