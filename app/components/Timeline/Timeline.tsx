import React from 'react'

import { TimelineView } from './TimelineView'

import { YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO } from '../../data/constants'
import { useStore } from '../Store'
import { TimelineData } from '../../js/objectFormating/formatTimelineData'

export const Timeline: React.FC<{ data: TimelineData }> = ({ data }) => {
  const { store } = useStore()

  return (
    <TimelineView
      timespans={data.timespans}
      events={data.events}
      startYear={YEARS_BEFORE_ZERO}
      endYear={YEARS_AFTER_ZERO}
      scale={store.scale}
    />
  )
}

export default Timeline
