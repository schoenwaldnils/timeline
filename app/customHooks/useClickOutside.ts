import { useEffect } from 'react'

export const useClickOutside = (elRef, callback) => {
  useEffect(() => {
    const handleClickOutside = e => {
      if (!elRef?.current?.contains(e.target) && callback) {
        callback(e)
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [callback, elRef])
}
