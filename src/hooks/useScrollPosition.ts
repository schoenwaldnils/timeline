import { RefObject, useCallback, useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { Coordinates } from '@/@types/Scroll'

import { useScrollStore } from './useScrollStore'

const isBrowser = typeof window !== 'undefined'

const positionNotNull = (
  position: Coordinates | null,
): position is Coordinates => {
  return position?.left !== 0 && position?.top !== 0
}

const getScrollPosition = (element: HTMLElement): Coordinates => {
  if (!isBrowser || !element) return { left: 0, top: 0 }

  const position = element.getBoundingClientRect()

  return { left: position.left * -1, top: position.top * -1 }
}

export function useScrollPosition(
  containerRef?: HTMLDivElement,
): RefObject<HTMLDivElement> {
  const { position, setScroll } = useScrollStore(
    useShallow((state) => ({
      position: state.scroll,
      setScroll: state.setScroll,
    })),
  )

  const elementRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(
    (e: Event) => {
      console.log('handleScroll', e)
      if (elementRef.current) {
        console.log(elementRef.current)
        const currPos = getScrollPosition(elementRef.current)
        console.log({ currPos })

        if (
          !position ||
          currPos.left !== position.left ||
          currPos.top !== position.top
        ) {
          setScroll(currPos)
        }
      }
    },
    [elementRef, position, setScroll],
  )

  // const handleScaleChanged = useCallback(
  //   (e: CustomEvent) => {
  //     const storeScale = e.detail.store.scale
  //     const actionScale = e.detail.action.scale

  //     const multiplier = storeScale > actionScale ? 0.5 : 2

  //     const halfWindowWidth = window.innerWidth / 2
  //     const centerPosition = position.left + halfWindowWidth
  //     const centerPositionScaled = centerPosition * multiplier
  //     const newScaledLeft = centerPositionScaled - halfWindowWidth

  //     const scaledScrollPosition = {
  //       left: newScaledLeft,
  //       top: position.top,
  //     }

  //     containerRef.current?.scrollTo(scaledScrollPosition)
  //   },
  //   [containerRef, position],
  // )

  useEffect(() => {
    if (containerRef && positionNotNull(position)) {
      containerRef.scrollTo(position)
    }

    console.log(containerRef)

    containerRef?.addEventListener('scroll', (e) => handleScroll(e), {
      passive: true,
    })

    // window.addEventListener('scaleChanged', handleScaleChanged, {
    //   passive: true,
    // })

    return () => {
      // window.removeEventListener('scaleChanged', handleScaleChanged)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [position, containerRef, handleScroll])

  return elementRef
}
