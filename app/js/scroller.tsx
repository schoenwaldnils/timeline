import { useEffect } from 'react'

import { setLocalStorage, getLocalStorage } from './localStorage'
import { useScrollPosition } from './useScrollPosition'

export const scroller = () => {
  const handleScroll = (scrollP: { left: number; top: number }) => {
    setLocalStorage('scrollPosition', JSON.stringify(scrollP))
  }

  useEffect(() => {
    const localScroll = getLocalStorage('scrollPosition')
    const parsedLocalScroll = JSON.parse(localScroll)
    if (parsedLocalScroll) {
      window.scrollTo(parsedLocalScroll)
    }
  })

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.left !== prevPos.left) handleScroll(currPos)
  }, [])
}
