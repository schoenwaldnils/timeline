import React from 'react'

import { TimelineView } from './TimelineView'

export default {
  title: 'Timeline',
  component: TimelineView,
}

export const Basic = () => (
  <TimelineView
    startYear={-200}
    endYear={300}
    events={[
      {
        id: '#1',
        name: 'Test Event',
        pixelYear: 50,
        rowIndex: 0,
      },
      {
        id: '#2',
        name: 'Test Event',
        pixelYear: 90,
        rowIndex: 1,
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
