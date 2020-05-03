import {
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react'

const isBrowser = typeof window !== 'undefined'

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    xElement: 0,
    yElement: 0,
  })

  const scrollRef = useRef(null)

  const handleMouseMove = useCallback(
    e => {
      if (scrollRef.current) {
        const refBound = scrollRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
          xElement: refBound.x * -1 + e.clientX,
          yElement: refBound.y * -1 + e.clientY,
        })
      }
    },
    [scrollRef],
  )

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return null

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return { mousePosition, scrollRef }
}
