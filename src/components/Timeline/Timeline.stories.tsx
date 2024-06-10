import { FC } from 'react'

import { TimelineView } from './TimelineView'

export default {
  title: 'Timeline',
  component: TimelineView,
}

export const Timeline: FC = () => (
  <TimelineView
    rows={4}
    startYear={-200}
    endYear={300}
    events={[
      {
        type: 'event',
        id: '#1',
        name: 'Test Event',
        pixelStart: 60,
        rowIndex: 2,
      },
      {
        type: 'event',
        id: '#2',
        name: 'Test Event',
        pixelStart: 90,
        rowIndex: 3,
      },
    ]}
    timespans={[
      {
        id: '8d9htmcSCAAyIKoQqqSAm',
        type: 'person',
        name: 'Isaac',
        startYear: 50,
        endYear: 170,
        duration: 120,
        pixelStart: 50,
        pixelEnd: 170,
        pixelDuration: 120,
        startBlurriness: 10,
        rowIndex: 0,
      },
      {
        id: '#4',
        type: 'time',
        name: 'Test Time 2',
        startYear: 70,
        endYear: 260,
        duration: 190,
        pixelStart: 70,
        pixelEnd: 260,
        pixelDuration: 190,
        rowIndex: 1,
      },
    ]}
  />
)
