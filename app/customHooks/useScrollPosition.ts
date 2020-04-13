import { useRef, useLayoutEffect, useCallback } from 'react'
import { setLocalStorage, getLocalStorage } from '../js/localStorage'

const isBrowser = typeof window !== 'undefined'

const STORAGE_NAME = 'scrollPosition'

function getScrollPosition(element: any) {
  if (!isBrowser) return { left: 0, top: 0 }

  const position = element.getBoundingClientRect()

  return { left: position.left * -1, top: position.top * -1 }
}

const loadLocalScroll = () => {
  const localScroll = getLocalStorage(STORAGE_NAME)
  return JSON.parse(localScroll)
}

const saveLocalScroll = (scrollP: { left: number; top: number }) => {
  setLocalStorage(STORAGE_NAME, JSON.stringify(scrollP))
}

export function useScrollPosition() {
  const position = useRef(loadLocalScroll())

  const elementRef = useRef(null)

  const handleScroll = useCallback(() => {
    if (elementRef.current) {
      const currPos = getScrollPosition(elementRef.current)

      if (!position.current || currPos.left !== position.current.left) {
        saveLocalScroll(currPos)
      }

      position.current = currPos
    }
  }, [elementRef])

  const containerRef = useCallback(
    node => {
      if (node !== null) {
        const localScroll = loadLocalScroll()
        if (localScroll) {
          node.scrollTo(localScroll)
        }

        node.addEventListener('scroll', () => handleScroll(), {
          passive: true,
        })
      }
    },
    [handleScroll],
  )

  useLayoutEffect(() => {
    return () => window.removeEventListener('scroll', handleScroll)
  }, [containerRef, handleScroll])

  return [containerRef, elementRef]
}
