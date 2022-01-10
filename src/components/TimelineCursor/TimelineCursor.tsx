import { FC } from 'react'

import { useStore } from '@/components/Store'

import { TimelineCursorView } from './TimelineCursorView'

interface TimelineCursorProps {
  pixelYear: number
}

export const TimelineCursor: FC<TimelineCursorProps> = ({ pixelYear }) => {
  const { store } = useStore()
  if (!pixelYear || pixelYear === 0) return null

  return <TimelineCursorView pixelYear={pixelYear} scale={store.scale} />
}
