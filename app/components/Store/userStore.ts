import acceptLanguage from 'accept-language'

import {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage,
} from '../../js/localStorage'

const STORAGE_NAME = 'timeline-store'

export const getUserLocalStore = () => {
  if (typeof window === 'undefined') return {}
  const storageStoreString = getLocalStorage(STORAGE_NAME)
  const storageStore: any = JSON.parse(storageStoreString) || {}

  if (!storageStore.locale) {
    acceptLanguage.languages(['en', 'de'])
    const userAcceptLanguage = window.navigator.languages
    const acceptedLanguage = acceptLanguage.get(userAcceptLanguage.join(','))

    storageStore.locale = acceptedLanguage

    setLocalStorage(STORAGE_NAME, JSON.stringify(storageStore))
  }

  return storageStore
}

export const setUserLocalStore = state => {
  const storageStoreString = getLocalStorage(STORAGE_NAME)
  const storageStore: any = JSON.parse(storageStoreString) || {}

  setLocalStorage(STORAGE_NAME, JSON.stringify({ ...storageStore, ...state }))
}

export const getUserSessionStore = () => {
  if (typeof window === 'undefined') return {}
  const storageStoreString = getSessionStorage(STORAGE_NAME)
  const storageStore: any = JSON.parse(storageStoreString) || {}

  return storageStore
}

export const setUserSessionStore = state => {
  const storageStoreString = getSessionStorage(STORAGE_NAME)
  const storageStore: any = JSON.parse(storageStoreString) || {}

  setSessionStorage(STORAGE_NAME, JSON.stringify({ ...storageStore, ...state }))
}
