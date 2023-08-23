'use client'
import { Global } from '@emotion/react'

import { useStore } from '@/hooks/useStore'

import base from './base'
import { themeDark, themeLight } from './theme'

export const GlobalStyles = () => {
  const theme = useStore((state) => state.theme)

  return <Global styles={[theme === 'light' ? themeLight : themeDark, base]} />
}
