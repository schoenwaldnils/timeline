import React from 'react'

import { Timeline } from './index'
import { TimespanTime } from '../Timespan/Timespan.stories'

export default {
  title: 'Timeline',
  component: Timeline,
}

export const Basic = () => <Timeline />
export const WithTime = () => (
  <Timeline>
    <TimespanTime></TimespanTime>
  </Timeline>
)
