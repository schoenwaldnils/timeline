import { addDecorator } from '@storybook/react'
import * as NextImage from 'next/image'
import i18n from './i18n'

import { StoreProvider } from '@/components/Store/StoreProvider'
import { SearchProvider } from '@/components/Search'
import { GlobalStyles } from '@/components/GlobalStyles'

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
  value: (props) => <img {...props} />,
})

addDecorator((storyFn) => (
  <StoreProvider>
    <SearchProvider>
      <GlobalStyles />
      <div>{storyFn()}</div>
    </SearchProvider>
  </StoreProvider>
))
