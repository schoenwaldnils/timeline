import { addDecorator } from '@storybook/react'
import styled from '@emotion/styled'
import { ApolloProvider } from '@apollo/react-hooks'

import { StoreProvider } from '../app/components/Store'
import { SearchProvider } from '../app/components/Search'
import { GlobalStyles } from '../app/components/GlobalStyles'
import { initApolloClient } from '../app/js/apollo'

const Preview = styled.div``

addDecorator(storyFn => (
  <Preview>
    <StoreProvider>
      <ApolloProvider client={initApolloClient()}>
        <SearchProvider>
          <GlobalStyles />
          <div>{storyFn()}</div>
        </SearchProvider>
      </ApolloProvider>
    </StoreProvider>
  </Preview>
))
