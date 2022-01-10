import cookie from 'cookie'

// from https://www.quirksmode.org/js/cookies.html
export const readCookie = (name: string): string => {
  let aCookie: string = undefined
  if (typeof document !== 'undefined' && navigator && navigator.cookieEnabled) {
    const cookies = cookie.parse(document.cookie)

    if (!name) {
      return null
    }

    if (cookies[name]) {
      aCookie = cookies[name]
    }
  }

  return aCookie
}

export const createCookie = (
  cname: string,
  cvalue: string,
  {
    maxAgeInDays = 365,
    ...params
  }: { maxAgeInDays?: number; expires?: Date } = {},
): void => {
  const defaultParams = {
    maxAge: maxAgeInDays * 24 * 60 * 60, // 356 days in seconds
    path: '/',
  }

  document.cookie = cookie.serialize(cname, cvalue, {
    ...defaultParams,
    ...params,
  })
}

export const eraseCookie = (name: string): void => {
  createCookie(name, '', {
    maxAgeInDays: -1,
    expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
  })
}
