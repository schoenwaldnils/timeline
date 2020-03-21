import acceptLanguage from 'accept-language'

import { getLocalStorage, setLocalStorage } from '../../js/localStorage'

const STORAGE_NAME = 'timeline-lang'

export const getUserLanguage = () => {
  const storageLang = getLocalStorage(STORAGE_NAME)

  if (storageLang) return storageLang

  acceptLanguage.languages(['en', 'de'])
  const userAcceptLanguage = window.navigator.languages
  const acceptedLanguage = acceptLanguage.get(userAcceptLanguage.join(','))

  setLocalStorage(STORAGE_NAME, acceptedLanguage)

  return acceptedLanguage
}

export const setUserLanguage = (locale: string) => {
  setLocalStorage(STORAGE_NAME, locale)
}
