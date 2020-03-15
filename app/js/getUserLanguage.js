import acceptLanguage from 'accept-language'

import { readCookie, createCookie } from './cookie'

export const getUserLanguage = () => {
  const cookieLang = readCookie('timeline-lang')

  if (cookieLang) return cookieLang

  acceptLanguage.languages(['en', 'de'])
  const userAcceptLanguage = window.navigator.languages
  const acceptedLanguage = acceptLanguage.get(userAcceptLanguage.join(','))

  createCookie('timeline-lang', acceptedLanguage)

  console.log({ acceptedLanguage })

  return acceptedLanguage
}
