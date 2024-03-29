import { Global } from '@emotion/react'
import { FC } from 'react'

import { useStore } from '@/components/Store'

import base from './base'
import { themeDark, themeLight } from './theme'

export const GlobalStyles: FC = () => {
  const { store } = useStore()
  return (
    <>
      <Global styles={store.themeIsDark ? themeDark : themeLight} />
      <Global styles={base} />
    </>
  )
}
