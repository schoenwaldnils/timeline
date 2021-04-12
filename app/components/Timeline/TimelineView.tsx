import styled from '@emotion/styled'
import { FC } from 'react'
import mergeRefs from 'react-merge-refs'

import { TimelineEvent } from '../../../@types/TimelineEvent.d'
import { Timespan as TimespanType } from '../../../@types/Timespan.d'
import { zIndexes } from '../../data/constants'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { checkForTouchDevice } from '../../js/checkForTouchDevice'
import { Event } from '../Event'
import { TimelineCursor } from '../TimelineCursor'
import { Timespan } from '../Timespan'
import { getTimelineWidth } from './getTimelineWidth'
import { TimelineNumbers } from './TimelineNumbers'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`

interface ContainerProps {
  width: number
  scale: number
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
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
  events?: TimelineEvent[]
  timespans?: TimespanType[]
  startYear: number
  endYear: number
  scale?: number
  ref?: HTMLElement
}

export const TimelineView: FC<TimelineViewProps> = ({
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
    <Wrapper ref={containerRef}>
      <Container
        ref={mergeRefs([elementRef, scrollRef])}
        width={width}
        scale={scale}
      >
        <TimelineNumbers
          startYear={startYear}
          endYear={endYear}
          scale={scale}
        />
        <Content>
          {timespans.map((timespan) => (
            <Timespan {...timespan} key={timespan.id} />
          ))}
          {events.map((event) => (
            <Event {...event} key={event.id} />
          ))}
        </Content>
        {showCursor && <TimelineCursor pixelYear={mousePosition.xElement} />}
      </Container>
    </Wrapper>
  )
}
