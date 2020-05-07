/** @jsx jsx */
import { jsx } from '@emotion/core'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { StoreProvider } from '../app/components/Store/StoreProvider'
import { withGraphQLClient } from '../app/lib/withGraphQLClient'

const TimelineApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default withGraphQLClient(TimelineApp)
