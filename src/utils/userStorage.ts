import { Store } from '@/hooks/useStore'
import {
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from '@/utils/localStorage'

const STORAGE_NAME = 'timeline-store'

export const getUserLocalStorage = (): Partial<Store> => {
  if (typeof window === 'undefined') return {}
  const storageStoreString = getLocalStorage(STORAGE_NAME)
  const storageStore: Record<string, unknown> =
    JSON.parse(storageStoreString) || {}

  return storageStore
}

export const setUserLocalStorage = (store: Partial<Store>): void => {
  const storageStoreString = getLocalStorage(STORAGE_NAME)
  const storageStore: Record<string, unknown> =
    JSON.parse(storageStoreString) || {}

  setLocalStorage(STORAGE_NAME, JSON.stringify({ ...storageStore, ...store }))
}

export const getUserSessionStorage = (): Partial<Store> => {
  if (typeof window === 'undefined') return {}
  const storageStoreString = getSessionStorage(STORAGE_NAME)
  const storageStore: Record<string, unknown> =
    JSON.parse(storageStoreString) || {}

  return storageStore
}

export const setUserSessionStorage = (store: Partial<Store>): void => {
  const storageStoreString = getSessionStorage(STORAGE_NAME)
  const storageStore: Record<string, unknown> =
    JSON.parse(storageStoreString) || {}

  setSessionStorage(STORAGE_NAME, JSON.stringify({ ...storageStore, ...store }))
}
