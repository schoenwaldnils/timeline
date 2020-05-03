import React from 'react'

import { Timeline } from './index'

export default {
  title: 'Timeline',
  component: Timeline,
}

export const Basic = () => (
  <Timeline
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
