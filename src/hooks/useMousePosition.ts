import { RefObject, useCallback, useEffect, useLayoutEffect, useState } from 'react'

const isBrowser = typeof window !== 'undefined'

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect

export const useMousePosition = (
  scrollContainerRef?: RefObject<HTMLDivElement | null>,
): {
  x: number
  y: number
  xElement: number
  yElement: number
} => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    xElement: 0,
    yElement: 0,
  })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const scrollContainer = scrollContainerRef?.current
      if (scrollContainer) {
        const refBound = scrollContainer.getBoundingClientRect()
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
          xElement: refBound.x * -1 + e.clientX,
          yElement: refBound.y * -1 + e.clientY,
        })
      }
    },
    [scrollContainerRef],
  )

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    })
    return () => {
      return window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return mousePosition
}
