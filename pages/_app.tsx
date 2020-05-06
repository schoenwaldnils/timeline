/** @jsx jsx */
import { jsx } from '@emotion/core'
import App from 'next/app'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { StoreProvider } from '../app/components/Store/StoreProvider'
import { withGraphQLClient } from '../app/lib/withGraphQLClient'

class TimelineApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StoreProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </StoreProvider>
    )
  }
}

export default withGraphQLClient(TimelineApp)
