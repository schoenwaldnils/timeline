import acceptLanguage from 'accept-language'

import { getLocalStorage, setLocalStorage } from '../../js/localStorage'

const STORAGE_NAME = 'timeline-store'

export const getUserStore = () => {
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

export const setUserStore = state => {
  const storageStoreString = getLocalStorage(STORAGE_NAME)
  const storageStore: any = JSON.parse(storageStoreString) || {}

  setLocalStorage(STORAGE_NAME, JSON.stringify({ ...storageStore, ...state }))
}
