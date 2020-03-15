import cookie from 'cookie'

// from https://www.quirksmode.org/js/cookies.html
export const readCookie = name => {
  let aCookie = false
  if (typeof document !== 'undefined' && navigator && navigator.cookieEnabled) {
    const cookies = cookie.parse(document.cookie)

    if (!name) {
      return cookies
    }

    if (cookies[name]) {
      aCookie = cookies[name]
    }
  }

  return aCookie
}

export const createCookie = (
  cname,
  cvalue,
  { maxAgeInDays, ...params } = {},
) => {
  const defaultParams = {
    maxAge: (maxAgeInDays || 365) * 24 * 60 * 60, // 356 days in seconds
    path: '/',
  }

  document.cookie = cookie.serialize(cname, cvalue, {
    ...defaultParams,
    ...params,
  })
}

export const eraseCookie = name => {
  createCookie(name, '', {
    maxAgeInDays: -1,
    expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
  })
}

export default (cname, cvalue, { maxAgeInDays, ...params } = {}) => {
  if (typeof document !== 'undefined' && navigator && navigator.cookieEnabled) {
    if (!cvalue) {
      return readCookie(cname)
    }

    createCookie(cname, cvalue, { maxAgeInDays, ...params })
  }

  return false
}
