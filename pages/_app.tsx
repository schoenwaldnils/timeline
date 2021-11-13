import { AppProps } from 'next/app'
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
