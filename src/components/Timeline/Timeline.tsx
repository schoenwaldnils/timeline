import { FC } from 'react'

import { useStore } from '@/components/Store'
import { YEARS_AFTER_ZERO, YEARS_BEFORE_ZERO } from '@/data/constants'
import { TimelineData } from '@/js/objectFormating/formatTimelineData'

import { TimelineView } from './TimelineView'

export const Timeline: FC<{ data: TimelineData }> = ({ data }) => {
  const { store } = useStore()

  return (
    <TimelineView
      rows={data.rows}
      timespans={data.timespans}
      events={data.events}
      startYear={YEARS_BEFORE_ZERO}
      endYear={YEARS_AFTER_ZERO}
      scale={store.scale}
    />
  )
}

export default Timeline
