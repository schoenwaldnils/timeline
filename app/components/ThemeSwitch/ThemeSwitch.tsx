import React from 'react'

import { useStore, SET_THEME } from '../Store'
import { ThemeSwitchView } from './ThemeSwitchView'

export const ThemeSwitch: React.FC = props => {
  const { store, dispatch } = useStore()

  const toggleTheme = () => {
    dispatch({
      type: SET_THEME,
      themeIsDark: !store.themeIsDark,
    })
  }

  return (
    <ThemeSwitchView
      {...props}
      toggleTheme={toggleTheme}
      isDark={store.themeIsDark}
    />
  )
}
