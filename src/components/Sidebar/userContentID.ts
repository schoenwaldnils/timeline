import { getUrlHash, removeUrlHash, setUrlHash } from '@/js/urlHash'

export const getUserContentID = (): string => {
  const urlID = getUrlHash()

  if (urlID) return urlID

  return null
}

export const setUserContentID = (id: string): void => {
  setUrlHash(id)
}

export const removeUserContentID = (): void => {
  removeUrlHash()
}
