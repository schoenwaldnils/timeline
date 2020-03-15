import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { LanguageProvider } from '../app/components/ContextLang'

class TimelineApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <LanguageProvider>
        <ApolloProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </ApolloProvider>
      </LanguageProvider>
    )
  }
}

export default TimelineApp
