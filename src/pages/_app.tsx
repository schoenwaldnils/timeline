import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { FC } from 'react'

import { GlobalStyles } from '@/components/GlobalStyles'
import { StoreProvider } from '@/components/Store/StoreProvider'

const TimelineApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default appWithTranslation(TimelineApp)
