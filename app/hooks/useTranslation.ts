import { useCallback } from 'react'

import { useStore } from '../components/Store'
import translations from '../data/translations'
import { DEFAULT_LOCALE } from '../utils/intl/intlConsts'

export function useTranslation(): {
  t: (key: string, params?: Record<string, string>) => string
  locale: string
} {
  const { store } = useStore()
  const { locale } = store

  const t = useCallback(
    (key: string, params = {}) => {
      const selectors = key.split('.')
      let string = translations
      selectors.forEach((selector) => {
        if (!string[selector]) {
          console.warn(`Translation '${key}' for locale '${locale}' not found.`)
        }
        string = string[selector]
      })

      let localeString: string = string[locale] || string[DEFAULT_LOCALE] || ''

      if (params) {
        Object.keys(params).forEach((key) => {
          if (localeString.includes(`%${key}%`)) {
            localeString = localeString.replace(`%${key}%`, params[key])
          }
        })
      }

      return localeString
    },
    [locale],
  )

  return {
    t,
    locale,
  }
}
