import React, { useRef, useContext } from 'react'
import styled from '@emotion/styled'
import mergeRefs from 'react-merge-refs'

import { Event, EventProps } from '../Event'
import { ContextScale } from '../ContextScale'
import { TimelineNumbers } from './TimelineNumbers'
import { TimelineCursor } from '../TimelineCursor'
import { Timespan, TimespanProps } from '../Timespan'

import { getTimelineWidth } from './getTimelineWidth'
import { time, zIndexes } from '../../data/constants'
import { checkForTouchDevice } from '../../js/checkForTouchDevice'
import { useMousePosition } from '../../customHooks/useMousePosition'
import { useContentfulTimeline } from '../../customHooks/useContentfulTimeline'

interface WrapperProps {
  width: number
  scale: number
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: 100%;
  padding-bottom: 2rem;
  font-size: 12px;
`

const Content = styled.div`
  position: relative;
  z-index: ${zIndexes.timelineContent};
  display: grid;
  grid-template-areas:
    'times'
    'events';
  grid-gap: 0.5rem;
  padding-top: 2rem;
`

interface TimelineProps {
  events?: Array<Object>
  timespans?: Array<Object>
  ref?: any
}

export const Timeline: React.FC<TimelineProps> = React.forwardRef(
  (_props, ref) => {
    const {
      data: { events = [], timespans = [] },
    } = useContentfulTimeline()

    const localRef = useRef(null)
    const { scale } = useContext(ContextScale)
    const mousePosition = useMousePosition(localRef)
    const { YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO } = time

    const width = getTimelineWidth(YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO, scale)
    const isTouchDevice = checkForTouchDevice()
    const showCursor = !isTouchDevice && mousePosition.x

    return (
      <Wrapper ref={mergeRefs([ref, localRef])} width={width} scale={scale}>
        <TimelineNumbers
          width={width}
          startYear={YEARS_BEFORE_ZERO}
          endYear={YEARS_AFTER_ZERO}
          scale={scale}
        />
        <Content>
          {timespans.map((timespan: TimespanProps) => (
            <Timespan {...timespan} key={timespan.id} />
          ))}
          {events.map((event: EventProps) => (
            <Event {...event} key={event.id} />
          ))}
        </Content>
        {showCursor && <TimelineCursor pixelYear={mousePosition.xElement} />}
      </Wrapper>
    )
  },
)
