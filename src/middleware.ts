import createMiddleware from 'next-intl/middleware'
import { i18n } from '../i18n-config'

const locales = [...i18n.locales]

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'always',
})

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
