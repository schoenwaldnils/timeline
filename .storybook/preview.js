import { addDecorator } from '@storybook/react'
import styled from '@emotion/styled'
import { ApolloProvider } from '@apollo/react-hooks'

import { LanguageProvider } from '../app/components/ContextLang'
import { GlobalStyles } from '../app/components/GlobalStyles'
import { client } from '../app/js/cfGraphQL'

const Preview = styled.div``

addDecorator(storyFn => (
  <Preview>
    <LanguageProvider>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <div>{storyFn()}</div>
      </ApolloProvider>
    </LanguageProvider>
  </Preview>
))
