import React from 'react'
import App from 'next/app'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { SearchProvider } from '../app/components/Search'
import { StoreProvider } from '../app/components/Store/StoreProvider'
import { withApollo } from '../app/js/apollo'

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

export default withApollo(TimelineApp)
