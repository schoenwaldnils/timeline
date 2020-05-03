import React from 'react'

import { useStore, SET_THEME } from '../Store'
import { ThemeSwitchView } from './ThemeSwitchView'

export const ThemeSwitch: React.FC = props => {
  const [state, dispatch] = useStore()

  const toggleTheme = () => {
    dispatch({
      type: SET_THEME,
      themeIsDark: !state.themeIsDark,
    })
  }

  return (
    <ThemeSwitchView
      {...props}
      toggleTheme={toggleTheme}
      isDark={state.themeIsDark}
    />
  )
}
