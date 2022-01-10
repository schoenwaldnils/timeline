import { LegacyRef, useCallback, useEffect, useRef } from 'react'

import { getLocalStorage, setLocalStorage } from '@/js/localStorage'

const isBrowser = typeof window !== 'undefined'

const STORAGE_NAME = 'scrollPosition'

function getScrollPosition(element: HTMLElement) {
  if (!isBrowser || !element) return { left: 0, top: 0 }

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

export function useScrollPosition(): [
  LegacyRef<HTMLDivElement>,
  LegacyRef<HTMLDivElement>,
] {
  const localScroll = loadLocalScroll() || {}
  const position = useRef({
    left: localScroll.left || 0,
    top: localScroll.top || 0,
  })

  const elementRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    if (elementRef.current) {
      const currPos = getScrollPosition(elementRef.current)

      if (
        !position.current ||
        currPos.left !== position.current.left ||
        currPos.top !== position.current.top
      ) {
        saveLocalScroll(currPos)
      }

      position.current = currPos
    }
  }, [elementRef])

  const handleScaleChanged = useCallback(
    (e: CustomEvent) => {
      const storeScale = e.detail.store.scale
      const actionScale = e.detail.action.scale

      const multiplier = storeScale > actionScale ? 0.5 : 2

      const halfWindowWidth = window.innerWidth / 2
      const centerPosition = position.current.left + halfWindowWidth
      const centerPositionScaled = centerPosition * multiplier
      const newScaledLeft = centerPositionScaled - halfWindowWidth

      const scaledScrollPosition = {
        left: newScaledLeft,
        top: position.current.top,
      }

      containerRef.current.scrollTo(scaledScrollPosition)
    },
    [containerRef, position],
  )

  useEffect(() => {
    if (!isBrowser) return

    if (containerRef.current) {
      containerRef.current.scrollTo(position.current)
    }

    containerRef.current.addEventListener('scroll', () => handleScroll(), {
      passive: true,
    })

    window.addEventListener('scaleChanged', handleScaleChanged, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scaleChanged', handleScaleChanged)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [position, containerRef, handleScroll, handleScaleChanged])

  return [containerRef, elementRef]
}
