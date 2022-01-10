import styled from '@emotion/styled'
import { FC } from 'react'
import mergeRefs from 'react-merge-refs'

import { TimelineEvent } from '@/@types/TimelineEvent.d'
import { Timespan as TimespanType } from '@/@types/Timespan.d'
import { Event } from '@/components/Event'
import { TimelineCursor } from '@/components/TimelineCursor'
import { Timespan } from '@/components/Timespan'
import { zIndexes } from '@/data/constants'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { checkForTouchDevice } from '@/js/checkForTouchDevice'

import { getTimelineWidth } from './getTimelineWidth'
import { TimelineNumbers } from './TimelineNumbers'

const TimelineWrapper = styled.div``

interface ContainerProps {
  rows: number
  width: number
  scale: number
}

const TimelineContainer = styled.div<ContainerProps>`
  --paddingTop: 4rem;
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: calc(${(p) => p.rows} * (2em + 5px) + var(--paddingTop));
  min-height: 100%;
  padding-bottom: 2rem;
  font-size: 12px;
`

const Content = styled.div`
  z-index: ${zIndexes.timelineContent};
  display: grid;
  grid-template-areas:
    'times'
    'events';
  grid-gap: 0.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

interface TimelineViewProps {
  rows: number
  events?: TimelineEvent[]
  timespans?: TimespanType[]
  startYear: number
  endYear: number
  scale?: number
  ref?: HTMLElement
}

export const TimelineView: FC<TimelineViewProps> = ({
  rows,
  events = [],
  timespans = [],
  startYear,
  endYear,
  scale = 1,
}) => {
  const { mousePosition, scrollRef } = useMousePosition()
  const [containerRef, elementRef] = useScrollPosition()

  const width = getTimelineWidth(startYear, endYear, scale)
  const isTouchDevice = checkForTouchDevice()
  const showCursor = !!(!isTouchDevice && mousePosition.xElement)

  return (
    <TimelineWrapper ref={containerRef}>
      <TimelineContainer
        ref={mergeRefs([elementRef, scrollRef])}
        rows={rows}
        width={width}
        scale={scale}
      >
        <TimelineNumbers
          startYear={startYear}
          endYear={endYear}
          scale={scale}
        />

        <Content>
          {events.map((event) => (
            <Event {...event} key={event.id} />
          ))}
          {timespans.map((timespan) => (
            <Timespan {...timespan} key={timespan.id} />
          ))}
        </Content>
        {showCursor && <TimelineCursor pixelYear={mousePosition.xElement} />}
      </TimelineContainer>
    </TimelineWrapper>
  )
}
