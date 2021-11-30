import { addDecorator } from '@storybook/react'
import * as NextImage from 'next/image'
import i18n from './i18n'

import { StoreProvider } from '../app/components/Store/StoreProvider'
import { SearchProvider } from '../app/components/Search'
import { GlobalStyles } from '../app/components/GlobalStyles'

export const parameters = {
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    de: 'Deutsch',
  },
}

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
  <StoreProvider>
    <SearchProvider>
      <GlobalStyles />
      <div>{storyFn()}</div>
    </SearchProvider>
  </StoreProvider>
))
