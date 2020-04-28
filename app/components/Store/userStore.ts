import acceptLanguage from 'accept-language'

import {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage,
} from '../../js/localStorage'

const STORAGE_NAME = 'timeline-store'

export const getUserLocalStore = () => {
  const storageStoreString = getLocalStorage(STORAGE_NAME)
  const storageStore: any = JSON.parse(storageStoreString) || {}

  if (!storageStore.lang) {
    acceptLanguage.languages(['en', 'de'])
    const userAcceptLanguage = window.navigator.languages
    const acceptedLanguage = acceptLanguage.get(userAcceptLanguage.join(','))

    storageStore.lang = acceptedLanguage

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
  const storageStoreString = getSessionStorage(STORAGE_NAME)
  const storageStore: any = JSON.parse(storageStoreString) || {}

  if (!storageStore.lang) {
    acceptLanguage.languages(['en', 'de'])
    const userAcceptLanguage = window.navigator.languages
    const acceptedLanguage = acceptLanguage.get(userAcceptLanguage.join(','))

    storageStore.lang = acceptedLanguage

    setSessionStorage(STORAGE_NAME, JSON.stringify(storageStore))
  }

  return storageStore
}

export const setUserSessionStore = state => {
  const storageStoreString = getSessionStorage(STORAGE_NAME)
  const storageStore: any = JSON.parse(storageStoreString) || {}

  setSessionStorage(STORAGE_NAME, JSON.stringify({ ...storageStore, ...state }))
}
