import { notFound } from 'next/navigation'
import * as rootParams from 'next/root-params'
import type { AbstractIntlMessages } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { i18n, type Locale } from '@/i18n-config'

export default getRequestConfig(async () => {
  const paramValue = await rootParams.locale()

  if (!paramValue || !i18n.locales.includes(paramValue as Locale)) {
    notFound()
  }
  const locale = paramValue as Locale

  const { default: messages } = (await import(`../messages/${locale}.json`)) as {
    default: AbstractIntlMessages
  }

  return { locale, messages }
})
