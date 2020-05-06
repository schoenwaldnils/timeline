import { useLocale } from '../context/LocaleContext'
import { DEFAULT_LOCALE } from '../utils/intl/intlConsts'
import translations from '../data/translations'

export function useTranslation() {
  const { locale } = useLocale()

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
