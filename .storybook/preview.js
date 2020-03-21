import { addDecorator } from '@storybook/react'
import styled from '@emotion/styled'
import { ApolloProvider } from '@apollo/react-hooks'

import { LanguageProvider } from '../app/components/ContextLang'
import { ScaleProvider } from '../app/components/ContextScale'
import { SidebarProvider } from '../app/components/Sidebar'
import { GlobalStyles } from '../app/components/GlobalStyles'
import { client } from '../app/js/cfGraphQL'

const Preview = styled.div``

addDecorator(storyFn => (
  <Preview>
    <LanguageProvider>
      <ScaleProvider>
        <ApolloProvider client={client}>
          <SidebarProvider>
            <GlobalStyles />
            <div>{storyFn()}</div>
          </SidebarProvider>
        </ApolloProvider>
      </ScaleProvider>
    </LanguageProvider>
  </Preview>
))
