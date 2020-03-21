import shallowequal from 'shallowequal'

const hasWindowLocation = !!(typeof window !== 'undefined' && window.location)

export const setUrlHash = (hash: string, pushState = true) => {
  if (!hasWindowLocation) return null

  const currentState = window.location.hash.replace(/^#/, '')

  if (!hash || shallowequal(currentState, hash)) return null

  const path = `${window.location.pathname}#${hash}`

  if (pushState) {
    window.history.pushState(null, null, path)
  } else {
    window.history.replaceState(null, null, path)
  }

  return hash
}

export const getUrlHash = (): string => {
  if (!hasWindowLocation) return null

  const currentState = window.location.hash.replace(/^#/, '')
  return currentState
}

export const removeUrlHash = () => {
  if (!hasWindowLocation) return null

  window.history.replaceState(null, null, window.location.pathname)
  window.history.replaceState(null, null, window.location.pathname)
  return null
}
