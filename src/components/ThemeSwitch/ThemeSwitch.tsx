import { FC } from 'react'

import { SET_THEME, useStore } from '@/components/Store'

import { ThemeSwitchView } from './ThemeSwitchView'

export const ThemeSwitch: FC = (props) => {
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
