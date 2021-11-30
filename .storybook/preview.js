import { addDecorator } from '@storybook/react'
import * as NextImage from 'next/image'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

import { StoreProvider } from '../app/components/Store/StoreProvider'
import { SearchProvider } from '../app/components/Search'
import { GlobalStyles } from '../app/components/GlobalStyles'

const OriginalNextImage = NextImage.default

// Fix for Next Image missing URL
// https://github.com/vercel/next.js/issues/18393#issuecomment-955577890
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ),
})

addDecorator((storyFn) => (
  <I18nextProvider i18n={i18n}>
    <StoreProvider>
      <SearchProvider>
        <GlobalStyles />
        <div>{storyFn()}</div>
      </SearchProvider>
    </StoreProvider>
  </I18nextProvider>
))
