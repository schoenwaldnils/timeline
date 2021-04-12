import { useStore } from '../components/Store'
import translations from '../data/translations'
import { DEFAULT_LOCALE } from '../utils/intl/intlConsts'

export function useTranslation(): {
  t: (key: string) => string
  locale: string
} {
  const { store } = useStore()
  const { locale } = store

  function t(key: string) {
    const selectors = key.split('.')
    let string = translations
    selectors.forEach((selector) => {
      if (!string[selector]) {
        console.warn(`Translation '${key}' for locale '${locale}' not found.`)
      }
      string = string[selector]
    })

    return string[locale] || string[DEFAULT_LOCALE] || ''
  }

  return {
    t,
    locale,
  }
}
