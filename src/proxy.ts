import createMiddleware from 'next-intl/middleware'

import { i18n } from '@/i18n-config'

const locales = [...i18n.locales]

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'always',
})

export const config = {
  // Run only on internationalized page routes. Exclude Payload's `/admin` and
  // `/api`, Next internals (`_next`/`_vercel`), and any path with a file
  // extension — otherwise `/admin` gets locale-prefixed to `/de/admin` and 404s.
  matcher: '/((?!api|admin|_next|_vercel|.*\\..*).*)',
}
