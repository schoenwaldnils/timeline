/** @jsx jsx */
import { jsx } from '@emotion/react'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { StoreProvider } from '../app/components/Store/StoreProvider'

const TimelineApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default TimelineApp
