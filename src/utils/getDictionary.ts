import type { Locale } from '@/i18n-config'
import { i18n } from '@/i18n-config'

const dictionaries = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  de: () => import('@/messages/de.json').then((module) => module.default),
}

export type Dictionary = typeof dictionaries.en extends () => Promise<infer T> ? T : never

export const getDictionary = async (locale: Locale) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()
