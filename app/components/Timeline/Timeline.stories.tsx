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
        pixelStart: 50,
        pixelDuration: 120,
        startBlurriness: 10,
        rowIndex: 0,
      },
      {
        id: '#4',
        type: 'time',
        name: 'Test Time 2',
        pixelStart: 70,
        pixelDuration: 190,
        rowIndex: 1,
      },
    ]}
  />
)
