import { YEARS_AFTER_ZERO, YEARS_BEFORE_ZERO } from '@/data/constants'
import { useStore } from '@/hooks/useStore'
import { TimelineData } from '@/utils/objectFormating/formatTimelineData'

import { TimelineView } from './TimelineView'

export const Timeline = ({ data }: { data: TimelineData }) => {
  const scale = useStore((state) => state.scale)

  return (
    <TimelineView
      rows={data.rows}
      timespans={data.timespans}
      events={data.events}
      startYear={YEARS_BEFORE_ZERO}
      endYear={YEARS_AFTER_ZERO}
      scale={scale}
    />
  )
}

export default Timeline
