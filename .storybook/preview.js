import { addDecorator } from '@storybook/preact'
import styled from '@emotion/styled'
import { ApolloProvider } from '@apollo/react-hooks'

import { LanguageProvider } from '../app/components/ContextLang'
import { ScaleProvider } from '../app/components/ContextScale'
import { SidebarProvider } from '../app/components/Sidebar'
import { SearchProvider } from '../app/components/Search'
import { GlobalStyles } from '../app/components/GlobalStyles'
import { initApolloClient } from '../app/js/apollo'

const Preview = styled.div``

addDecorator(storyFn => (
  <Preview>
    <LanguageProvider>
      <ScaleProvider>
        <ApolloProvider client={initApolloClient()}>
          <SidebarProvider>
            <SearchProvider>
              <GlobalStyles />
              <div>{storyFn()}</div>
            </SearchProvider>
          </SidebarProvider>
        </ApolloProvider>
      </ScaleProvider>
    </LanguageProvider>
  </Preview>
))
