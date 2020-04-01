import { useRef, useLayoutEffect, DependencyList } from 'react'

const isBrowser = typeof window !== 'undefined'

function getScrollPosition(useWindow: boolean, element?: any) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { left: window.scrollX * -1, top: window.scrollY * -1 }
    : { left: position.left * -1, top: position.top * -1 }
}

export function useScrollPosition(
  effect,
  deps: DependencyList,
  element?: any,
  useWindow?: boolean,
  wait?: number,
) {
  const position = useRef(getScrollPosition(useWindow))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition(useWindow, element)
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}
