import { getLocalStorageNumber, setLocalStorage } from '../../js/localStorage'

const STORAGE_NAME = 'timeline-scale'

export const getUserScale = (): number => {
  const defaultScale = 1
  const storageScale = getLocalStorageNumber(STORAGE_NAME)

  if (storageScale) return storageScale

  setLocalStorage(STORAGE_NAME, defaultScale)

  return defaultScale
}

export const setUserScale = (locale: string) => {
  setLocalStorage(STORAGE_NAME, locale)
}
