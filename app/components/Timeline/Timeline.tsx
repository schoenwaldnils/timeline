import React from 'react'

import { TimelineView } from './TimelineView'

import { YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO } from '../../data/constants'
import { useStore } from '../Store'
import { useTimelineData } from '../../hooks/useTimelineData'

type contentfulArray = {
  items: Array<any>
}

export interface TimelineProps {
  timelineData: {
    persons: contentfulArray
    times: contentfulArray
    events: contentfulArray
  }
}

export const Timeline: React.FC<TimelineProps> = ({ timelineData }) => {
  const [state] = useStore()
  const formatedData = useTimelineData(timelineData)

  return (
    <TimelineView
      timespans={formatedData.timespans}
      events={formatedData.events}
      startYear={YEARS_BEFORE_ZERO}
      endYear={YEARS_AFTER_ZERO}
      scale={state.scale}
    />
  )
}

export default Timeline
