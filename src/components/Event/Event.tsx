'use client'

import type { TimelineEvent } from '@/@types/TimelineEvent.d'
import { useSidebarStore } from '@/hooks/useSidebarStore'

import css from './Event.module.css'

export const Event = ({ id, name, pixelStart, rowIndex }: TimelineEvent) => {
  const setSidebar = useSidebarStore((state) => state.setSidebar)

  return (
    <button
      className={css.Event}
      style={{
        marginTop: `calc(${rowIndex} * (2em + 4px))`,
        marginLeft: `${pixelStart}px`,
      }}
      onClick={() => setSidebar({ type: 'event', id })}
    >
      {name}
    </button>
  )
}
