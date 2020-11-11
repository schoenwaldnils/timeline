import { createCookie, eraseCookie, readCookie } from '../js/cookie'

export const getUserFromCookie = () => {
  const cookie = readCookie('auth')

  if (!cookie) {
    return
  }

  // eslint-disable-next-line consistent-return
  return JSON.parse(cookie)
}

export const setUserCookie = user => {
  createCookie('auth', JSON.stringify(user), {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    maxAgeInDays: 1 / 24,
  })
}

export const removeUserCookie = () => eraseCookie('auth')
