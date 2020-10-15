import React from 'react'

import { useStore } from '../Store'
import { LogoView } from './LogoView'

export const Logo = () => {
  const { store } = useStore()

  return <LogoView isDark={store.themeIsDark} />
}
