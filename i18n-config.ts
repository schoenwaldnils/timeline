export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
} as const

export type Locale = (typeof i18n)['locales'][number]

const defaultNS = 'common'

export const i18nSettings = (locale: Locale, nameSpace = defaultNS) => ({
  // debug: true,
  supportedLngs: i18n.locales,
  fallbackLng: i18n.defaultLocale,
  lng: locale,
  fallbackNS: defaultNS,
  defaultNS,
  ns: nameSpace,
})
