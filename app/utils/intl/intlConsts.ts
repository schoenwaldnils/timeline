export type Locale = 'de' | 'en'

type LocalesType = {
  EN: Locale
  DE: Locale
}

export const LOCALES: LocalesType = {
  EN: 'en',
  DE: 'de',
}

export const SUPPORTED_LOCALES = [LOCALES.EN, LOCALES.DE]

export const DEFAULT_LOCALE = LOCALES.EN

export function isLocale(tested: string): tested is Locale {
  return SUPPORTED_LOCALES.some(locale => locale === tested)
}
