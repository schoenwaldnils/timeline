import { RefObject } from 'react'

import { TimelineEvent } from '@/@types/TimelineEvent.d'
import { Timespan as TimespanType } from '@/@types/Timespan.d'
import { Event } from '@/components/Event'
import { TimelineCursor } from '@/components/TimelineCursor'
import { Timespan } from '@/components/Timespan'
import { useMousePosition } from '@/hooks/useMousePosition'
import { checkForTouchDevice } from '@/utils/checkForTouchDevice'

import { getTimelineWidth } from './getTimelineWidth'
import css from './Timeline.module.css'
import { TimelineNumbers } from './TimelineNumbers'

interface TimelineViewProps {
  rows: number
  events?: TimelineEvent[]
  timespans?: TimespanType[]
  startYear: number
  endYear: number
  scale?: number
  containerRef?: RefObject<HTMLDivElement>
}

export const TimelineView = ({
  rows,
  events = [],
  timespans = [],
  startYear,
  endYear,
  scale = 1,
  containerRef,
}: TimelineViewProps) => {
  const mousePosition = useMousePosition(containerRef?.current || undefined)

  console.log(containerRef)

  const width = getTimelineWidth(startYear, endYear, scale)
  const isTouchDevice = checkForTouchDevice()
  const showCursor = !!(!isTouchDevice && mousePosition.xElement)

  return (
    <div
      className={css.Timeline}
      style={{
        width,
        height: `calc(${rows} * (2em + 5px) + var(--paddingTop))`,
      }}
      ref={containerRef}
    >
      <TimelineNumbers startYear={startYear} endYear={endYear} scale={scale} />

      <div className={css.Timeline_content}>
        {events.map((event) => (
          <Event {...event} key={event.id} />
        ))}
        {timespans.map((timespan) => (
          <Timespan {...timespan} key={timespan.id} />
        ))}
      </div>
      {showCursor && <TimelineCursor pixelYear={mousePosition.xElement} />}
    </div>
  )
}
