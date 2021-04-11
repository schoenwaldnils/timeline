/** @jsx jsx */

import { jsx, Global } from '@emotion/react'

import base from './base'
import { useStore } from '../Store'
import { themeDark, themeLight } from './theme'

export const GlobalStyles = () => {
  const { store } = useStore()
  return (
    <>
      <Global styles={store.themeIsDark ? themeDark : themeLight} />
      <Global styles={base} />
    </>
  )
}
