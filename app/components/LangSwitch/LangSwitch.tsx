import { ClickAwayListener } from '@material-ui/core'
import { FC, useState } from 'react'

import { Locale } from '../../utils/intl/intlConsts'
import { SET_LOCALE, useStore } from '../Store'
import { LangSwitchView } from './LangSwitchView'

export const LangSwitch: FC = () => {
  const { store, dispatch } = useStore()
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => setIsActive(!isActive)

  const handleButtonClick = (newLocale: Locale) => {
    dispatch({
      type: SET_LOCALE,
      locale: newLocale,
    })
    setIsActive(false)
  }

  return (
    <ClickAwayListener onClickAway={() => isActive && setIsActive(false)}>
      <LangSwitchView
        isActive={isActive}
        toggleIsActive={toggleIsActive}
        handleButtonClick={handleButtonClick}
        currentLocale={store.locale}
      />
    </ClickAwayListener>
  )
}
