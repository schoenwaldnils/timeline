import { addDecorator } from '@storybook/preact'

import { StoreProvider } from '../app/components/Store/StoreProvider'
import { SearchProvider } from '../app/components/Search'
import { GlobalStyles } from '../app/components/GlobalStyles'

addDecorator(storyFn => (
  <StoreProvider>
    <SearchProvider>
      <GlobalStyles />
      <div>{storyFn()}</div>
    </SearchProvider>
  </StoreProvider>
))
