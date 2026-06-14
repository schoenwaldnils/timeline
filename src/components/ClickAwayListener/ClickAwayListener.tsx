import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'

type FocusEvents = 'focusin' | 'focusout'
type MouseEvents = 'click' | 'mousedown' | 'mouseup'
type TouchEvents = 'touchstart' | 'touchend'
type Events = FocusEvent | MouseEvent | TouchEvent

interface Props {
  onClickAway: (event: Events) => void
  focusEvent?: FocusEvents
  mouseEvent?: MouseEvents
  touchEvent?: TouchEvents
  children: ReactNode
}

export const ClickAwayListener: FunctionComponent<Props> = ({
  children,
  onClickAway,
  focusEvent = 'focusin',
  mouseEvent = 'click',
  touchEvent = 'touchend',
}) => {
  const node = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)

  /**
   * Ignore the event that mounted this listener so the same click can't trigger
   * onClickAway immediately. https://github.com/facebook/react/issues/20074
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      mounted.current = true
    }, 0)

    return () => {
      clearTimeout(timer)
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    const nodeDocument = node.current?.ownerDocument ?? document

    const handleEvents = (event: Events): void => {
      if (!mounted.current) return

      const target = event.target as Node | null
      if (!target) return

      // Inside the wrapped element, or already detached from the document.
      if (node.current?.contains(target) || !nodeDocument.contains(target)) {
        return
      }

      onClickAway(event)
    }

    nodeDocument.addEventListener(mouseEvent, handleEvents)
    nodeDocument.addEventListener(touchEvent, handleEvents)
    nodeDocument.addEventListener(focusEvent, handleEvents)

    return () => {
      nodeDocument.removeEventListener(mouseEvent, handleEvents)
      nodeDocument.removeEventListener(touchEvent, handleEvents)
      nodeDocument.removeEventListener(focusEvent, handleEvents)
    }
  }, [focusEvent, mouseEvent, onClickAway, touchEvent])

  return (
    <div ref={node} style={{ display: 'contents' }}>
      {children}
    </div>
  )
}
