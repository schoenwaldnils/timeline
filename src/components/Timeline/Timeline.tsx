'use client'

import dynamic from 'next/dynamic'
import { RefObject } from 'react'

import { YEARS_AFTER_ZERO, YEARS_BEFORE_ZERO } from '@/data/constants'
import { useScaleStore } from '@/hooks/useScaleStore'
import { useStore } from '@/hooks/useStore'
import {
  ContentfulTimelineData,
  formatTimelineData,
} from '@/utils/objectFormating/formatTimelineData'

const TimelineView = dynamic(
  () => import('./TimelineView').then((m) => m.TimelineView),
  {
    ssr: false,
  },
)

export const Timeline = ({
  data,
  containerRef,
}: {
  data: ContentfulTimelineData
  containerRef: RefObject<HTMLDivElement>
}) => {
  const scale = useScaleStore((state) => state.scale)
  const filter = useStore((state) => state.filter)
  const formatedData = formatTimelineData(data, scale, filter)

  return (
    <TimelineView
      rows={formatedData.rows}
      timespans={formatedData.timespans}
      events={formatedData.events}
      startYear={YEARS_BEFORE_ZERO}
      endYear={YEARS_AFTER_ZERO}
      scale={scale}
      containerRef={containerRef}
    />
  )
}

export default Timeline
