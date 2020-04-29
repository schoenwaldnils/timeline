import React, { useState, useRef } from 'react'

import { useClickOutside } from '../../customHooks/useClickOutside'
import { useStore, SET_LANG } from '../Store'
import { LangSwitchView } from './LangSwitchView'

export const LangSwitch: React.FC = () => {
  const [state, dispatch] = useStore()
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useClickOutside(ref, () => {
    if (isActive) setIsActive(false)
  })

  const toggleIsActive = () => setIsActive(!isActive)

  const handleButtonClick = lang => {
    dispatch({ type: SET_LANG, lang })
    setIsActive(false)
  }

  return (
    <LangSwitchView
      isActive={isActive}
      toggleIsActive={toggleIsActive}
      handleButtonClick={handleButtonClick}
      currentLang={state.lang}
      ref={ref}
    />
  )
}
