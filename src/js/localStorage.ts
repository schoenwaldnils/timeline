export const setLocalStorage = (key: string, value: string | number): void => {
  let stringValue: string

  if (typeof value === 'number') {
    stringValue = value.toString()
  } else {
    stringValue = value
  }

  window.localStorage.setItem(key, stringValue)
}

export const getLocalStorage = (key: string): string => {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem(key)
}

export const removeLocalStorage = (key: string): void => {
  if (typeof window === 'undefined') return null
  return window.localStorage.removeItem(key)
}

export const setSessionStorage = (
  key: string,
  value: string | number,
): void => {
  let stringValue: string

  if (typeof value === 'number') {
    stringValue = value.toString()
  } else {
    stringValue = value
  }

  window.sessionStorage.setItem(key, stringValue)
}

export const getSessionStorage = (key: string): string => {
  if (typeof window === 'undefined') return null
  return window.sessionStorage.getItem(key)
}

export const removeSessionStorage = (key: string): void => {
  if (typeof window === 'undefined') return null
  return window.sessionStorage.removeItem(key)
}
