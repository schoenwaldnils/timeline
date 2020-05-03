import React from 'react'

import { TimelineView } from './TimelineView'

import { time } from '../../data/constants'
import { useStore } from '../Store'

interface TimelineProps {
  events?: Array<Object>
  timespans?: Array<Object>
  ref?: any
}

export const Timeline: React.FC<TimelineProps> = React.forwardRef(
  ({ events = [], timespans = [] }, ref) => {
    const [state] = useStore()
    const { YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO } = time

    return (
      <TimelineView
        ref={ref}
        events={events}
        timespans={timespans}
        startYear={YEARS_BEFORE_ZERO}
        endYear={YEARS_AFTER_ZERO}
        scale={state.scale}
      />
    )
  },
)
