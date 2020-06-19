import { DEFAULT_LOCALE } from '../utils/intl/intlConsts'
import translations from '../data/translations'
import { useStore } from '../components/Store'

export function useTranslation() {
  const [state] = useStore()
  const { locale } = state

  function t(key: string) {
    const selectors = key.split('.')
    let string = translations
    selectors.forEach(selector => {
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
