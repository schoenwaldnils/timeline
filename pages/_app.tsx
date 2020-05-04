/** @jsx jsx */
import { jsx } from '@emotion/core'
import App from 'next/app'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { SearchProvider } from '../app/components/Search'
import { StoreProvider } from '../app/components/Store/StoreProvider'
import { withGraphQLClient } from '../app/lib/withGraphQLClient'

class TimelineApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StoreProvider>
        <SearchProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </SearchProvider>
      </StoreProvider>
    )
  }
}

export default withGraphQLClient(TimelineApp)
