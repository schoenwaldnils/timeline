import React, { useRef } from 'react'
import styled from '@emotion/styled'
import mergeRefs from 'react-merge-refs'

import { Event, EventProps } from '../Event'
import { TimelineNumbers } from './TimelineNumbers'
import { TimelineCursor } from '../TimelineCursor'
import { Timespan, TimespanProps } from '../Timespan'

import { getTimelineWidth } from './getTimelineWidth'
import { time, zIndexes } from '../../data/constants'
import { checkForTouchDevice } from '../../js/checkForTouchDevice'
import { useMousePosition } from '../../customHooks/useMousePosition'
import { useStore } from '../Store'

interface WrapperProps {
  width: number
  scale: number
}

const Wrapper = styled.div<WrapperProps>`
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

interface TimelineProps {
  events?: Array<Object>
  timespans?: Array<Object>
  ref?: any
}

export const Timeline: React.FC<TimelineProps> = React.forwardRef(
  ({ events = [], timespans = [] }, ref) => {
    const localRef = useRef(null)
    const [state] = useStore()
    const mousePosition = useMousePosition(localRef)
    const { YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO } = time

    const width = getTimelineWidth(
      YEARS_BEFORE_ZERO,
      YEARS_AFTER_ZERO,
      state.scale,
    )
    const isTouchDevice = checkForTouchDevice()
    const showCursor = !!(!isTouchDevice && mousePosition.xElement)

    return (
      <Wrapper
        ref={mergeRefs([ref, localRef])}
        width={width}
        scale={state.scale}
      >
        <TimelineNumbers
          startYear={YEARS_BEFORE_ZERO}
          endYear={YEARS_AFTER_ZERO}
          scale={state.scale}
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
