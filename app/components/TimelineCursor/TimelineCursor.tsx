import React from 'react'

import { useStore } from '../Store'
import { TimelineCursorView } from './TimelineCursorView'

interface TimelineCursorProps {
  pixelYear: number
}

export const TimelineCursor: React.FC<TimelineCursorProps> = ({
  pixelYear,
}) => {
  const [state] = useStore()
  if (!pixelYear || pixelYear === 0) return null

  return <TimelineCursorView pixelYear={pixelYear} scale={state.scale} />
}
