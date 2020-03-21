import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from '../../js/localStorage'

const STORAGE_NAME = 'timeline-contentID'

export const getUserContentID = (): string => {
  const storageContentID = getLocalStorage(STORAGE_NAME)

  if (storageContentID) return storageContentID

  return null
}

export const setUserContentID = (id: string) => {
  setLocalStorage(STORAGE_NAME, id)
}

export const removeUserContentID = () => {
  removeLocalStorage(STORAGE_NAME)
}
