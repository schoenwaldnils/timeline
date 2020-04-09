import { setLocalStorage, getLocalStorage } from './localStorage'
import { useScrollPosition } from './useScrollPosition'

const saveScrollLocally = (scrollP: { left: number; top: number }) => {
  setLocalStorage('scrollPosition', JSON.stringify(scrollP))
}

const loadLocalScroll = () => {
  const localScroll = getLocalStorage('scrollPosition')
  return JSON.parse(localScroll)
}

export const Scroller = () => {
  const localScroll = loadLocalScroll()
  if (localScroll) {
    window.scrollTo(localScroll)
  }

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.left !== prevPos.left) saveScrollLocally(currPos)
  }, [])
}
