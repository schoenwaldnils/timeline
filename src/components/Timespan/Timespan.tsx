'use client'

import type { Timespan as TimespanProps } from '@/@types/Timespan.d'
import { useSidebarStore } from '@/hooks/useSidebarStore'

import { generateGradient } from './generateGradient'
import css from './Timespan.module.css'

const timeColors = {
  person: 'var(--Timespan-backgroundColor--person)',
  time: 'var(--Timespan-backgroundColor--time)',
}

const transparentColors = {
  person: 'var(--Timespan-backgroundColor--personT)',
  time: 'var(--Timespan-backgroundColor--timeT)',
}

export const Timespan = ({
  id,
  type,
  name,
  startBlurriness,
  endBlurriness,
  pixelStart,
  pixelDuration,
  rowIndex,
}: TimespanProps) => {
  const setSidebar = useSidebarStore((state) => state.setSidebar)

  const handleClick = () => {
    setSidebar({ type, id })
  }

  const background = generateGradient({
    startBlurriness,
    endBlurriness,
    color: timeColors[type],
    colorTransparent: transparentColors[type],
  })

  return (
    <button
      className={css.Timespan}
      style={{
        width: pixelDuration,
        marginTop: `calc(${rowIndex} * (2em + 4px))`,
        marginLeft: pixelStart,
        background: background,
      }}
      tabIndex={0}
      onClick={handleClick}
    >
      <div className={css.Timespan_name}>{name}</div>
    </button>
  )
}
