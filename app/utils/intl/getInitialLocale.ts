import { isBrowser } from '../isBrowser'
import { DEFAULT_LOCALE, isLocale, Locale } from './intlConsts'

export function getInitialLocale(): Locale {
  if (!isBrowser) return DEFAULT_LOCALE

  // preference from the previous session
  const localSetting = localStorage.getItem('locale')
  if (localSetting && isLocale(localSetting)) {
    return localSetting
  }

  // the language setting of the browser
  const [browserSetting] = navigator.language.split('-')
  if (isLocale(browserSetting)) {
    return browserSetting
  }

  return DEFAULT_LOCALE
}
