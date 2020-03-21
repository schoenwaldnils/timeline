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
  return window.localStorage.getItem(key)
}

export const getLocalStorageNumber = (key: string): number => {
  return parseInt(getLocalStorage(key), 10)
}

export const removeLocalStorage = (key: string) => {
  return window.localStorage.removeItem(key)
}
