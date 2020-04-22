export const setLocalStorage = (key: string, value: string | number) => {
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

export const getLocalStorageNumber = (key: string): number => {
  return parseFloat(getLocalStorage(key))
}

export const removeLocalStorage = (key: string) => {
  return window.localStorage.removeItem(key)
}
