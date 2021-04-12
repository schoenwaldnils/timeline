/** @jsx jsx */
import { jsx } from '@emotion/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ReactNode } from 'react'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { StoreProvider } from '../app/components/Store/StoreProvider'

const TimelineApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <StoreProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default TimelineApp
