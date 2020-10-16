import React from 'react'

import { TimelineView } from './TimelineView'

import { YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO } from '../../data/constants'
import { useStore } from '../Store'
import { useTimelineData } from '../../hooks/useTimelineData'

type contentfulArray = {
  items: Array<any>
}

export const Timeline: React.FC = () => {
  const { store } = useStore()
  const formatedData = useTimelineData()

  console.log(state.activePersons)

  const activatedTimespans = formatedData.timespans.map(t => {
    const newT = t
    if (state.activePersons.includes(t.id)) newT.isActive = true
    return newT
  })

  return (
    <TimelineView
      timespans={activatedTimespans}
      events={formatedData.events}
      startYear={YEARS_BEFORE_ZERO}
      endYear={YEARS_AFTER_ZERO}
      scale={store.scale}
    />
  )
}

export default Timeline
