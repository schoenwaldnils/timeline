import { useLayoutEffect, useEffect, useState } from 'react'

const isBrowser = typeof window !== 'undefined'

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect

export const useMousePosition = ref => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    xElement: 0,
    yElement: 0,
  })

  useIsomorphicLayoutEffect(() => {
    const setFromEvent = e => {
      const refBound = ref.current.getBoundingClientRect()
      setPosition({
        x: e.clientX,
        y: e.clientY,
        xElement: refBound.x * -1 + e.clientX,
        yElement: refBound.y * -1 + e.clientY,
      })
    }

    if (!isBrowser) return null

    window.addEventListener('mousemove', setFromEvent, { passive: true })
    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [ref])

  return position
}
