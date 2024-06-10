'use client'

import { useScaleStore } from '@/hooks/useScaleStore'

import { TimelineCursorView } from './TimelineCursorView'

interface TimelineCursorProps {
  pixelYear: number
}

export const TimelineCursor = ({ pixelYear }: TimelineCursorProps) => {
  const scale = useScaleStore((state) => state.scale)

  if (!pixelYear || pixelYear === 0) return null

  return <TimelineCursorView pixelYear={pixelYear} scale={scale} />
}
