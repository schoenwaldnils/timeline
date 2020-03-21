import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { LanguageProvider } from '../app/components/ContextLang'
import { ScaleProvider } from '../app/components/ContextScale'
import { SidebarProvider } from '../app/components/Sidebar'
import { client } from '../app/js/cfGraphQL'

class TimelineApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <LanguageProvider>
        <ScaleProvider>
          <ApolloProvider client={client}>
            <SidebarProvider>
              <GlobalStyles />
              <Component {...pageProps} />
            </SidebarProvider>
          </ApolloProvider>
        </ScaleProvider>
      </LanguageProvider>
    )
  }
}

export default TimelineApp
