import type { AbstractIntlMessages } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { i18n, type Locale } from '@/i18n-config'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale =
    requested && i18n.locales.includes(requested as Locale)
      ? (requested as Locale)
      : i18n.defaultLocale

  const { default: messages } = (await import(`../messages/${locale}.json`)) as {
    default: AbstractIntlMessages
  }

  return { locale, messages }
})
