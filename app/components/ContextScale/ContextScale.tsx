import React, { useState, useEffect } from 'react'

import { getUserScale, setUserScale } from './userScale'

const DEFAULT_SCALE = 1

interface ContextScaleInterface {
  scale: number
  changeScale: (scale: any) => void
}

export const ContextScale = React.createContext<ContextScaleInterface | null>({
  scale: DEFAULT_SCALE,
  changeScale: () => null,
})

export const ScaleProvider: React.FC = ({ children }) => {
  const [scale, setScale] = useState(DEFAULT_SCALE)

  const changeScale = newScale => {
    setUserScale(newScale)
    setScale(newScale)
  }

  useEffect(() => {
    const localScale = getUserScale()
    if (localScale !== scale) {
      changeScale(localScale)
    }
  }, [scale])

  return (
    <ContextScale.Provider
      value={{
        scale,
        changeScale,
      }}
    >
      {children}
    </ContextScale.Provider>
  )
}
