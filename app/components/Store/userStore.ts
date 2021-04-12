import acceptLanguage from 'accept-language'

import {
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from '../../js/localStorage'
import { Store } from './reducer'

const STORAGE_NAME = 'timeline-store'

export const getUserLocalStore = (): Partial<Store> => {
  if (typeof window === 'undefined') return {}
  const storageStoreString = getLocalStorage(STORAGE_NAME)
  const storageStore: Record<string, unknown> =
    JSON.parse(storageStoreString) || {}

  if (!storageStore.locale) {
    acceptLanguage.languages(['en', 'de'])
    const userAcceptLanguage = window.navigator.languages
    const acceptedLanguage = acceptLanguage.get(userAcceptLanguage.join(','))

    storageStore.locale = acceptedLanguage

    setLocalStorage(STORAGE_NAME, JSON.stringify(storageStore))
  }

  return storageStore
}

export const setUserLocalStore = (store: Partial<Store>): void => {
  const storageStoreString = getLocalStorage(STORAGE_NAME)
  const storageStore: Record<string, unknown> =
    JSON.parse(storageStoreString) || {}

  setLocalStorage(STORAGE_NAME, JSON.stringify({ ...storageStore, ...store }))
}

export const getUserSessionStore = (): Partial<Store> => {
  if (typeof window === 'undefined') return {}
  const storageStoreString = getSessionStorage(STORAGE_NAME)
  const storageStore: Record<string, unknown> =
    JSON.parse(storageStoreString) || {}

  return storageStore
}

export const setUserSessionStore = (store: Partial<Store>): void => {
  const storageStoreString = getSessionStorage(STORAGE_NAME)
  const storageStore: Record<string, unknown> =
    JSON.parse(storageStoreString) || {}

  setSessionStorage(STORAGE_NAME, JSON.stringify({ ...storageStore, ...store }))
}
