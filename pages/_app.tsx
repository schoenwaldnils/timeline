import React from 'react'
import App from 'next/app'

import { GlobalStyles } from '../app/components/GlobalStyles'
import { LanguageProvider } from '../app/components/ContextLang'
import { ScaleProvider } from '../app/components/ContextScale'
import { SearchProvider } from '../app/components/Search'
import { SidebarProvider } from '../app/components/Sidebar'
import { withApollo } from '../app/js/apollo'

class TimelineApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <LanguageProvider>
        <ScaleProvider>
          <SidebarProvider>
            <SearchProvider>
              <GlobalStyles />
              <Component {...pageProps} />
            </SearchProvider>
          </SidebarProvider>
        </ScaleProvider>
      </LanguageProvider>
    )
  }
}

export default withApollo(TimelineApp)
