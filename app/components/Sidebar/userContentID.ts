import { setUrlHash, getUrlHash, removeUrlHash } from '../../js/urlHash'

export const getUserContentID = (): string => {
  const urlID = getUrlHash()

  if (urlID) return urlID

  return null
}

export const setUserContentID = (id: string) => {
  setUrlHash(id)
}

export const removeUserContentID = () => {
  removeUrlHash()
}
