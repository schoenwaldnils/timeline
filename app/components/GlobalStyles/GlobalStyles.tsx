/** @jsx jsx */

import { jsx, Global } from '@emotion/core'

import base from './base'
import { useStore } from '../Store'
import { themeDark, themeLight } from './theme'

export const GlobalStyles = () => {
  const [state] = useStore()
  return (
    <>
      <Global styles={state.themeIsDark ? themeDark : themeLight} />
      <Global styles={base} />
    </>
  )
}
