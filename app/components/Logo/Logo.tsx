import React from 'react'

import { useStore } from '../Store'
import { LogoView } from './LogoView'

export const Logo = () => {
  const [state] = useStore()

  return <LogoView isDark={state.themeIsDark} />
}
