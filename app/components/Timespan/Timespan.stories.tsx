import React from 'react'

import { Timespan } from './index'

export default {
  title: 'Timespan',
  component: Timespan,
}

export const Time = () => (
  <Timespan
    id=""
    name="Event Lorem Ipsum"
    type="time"
    pixelStart={50}
    rowIndex={0}
    pixelDuration={537}
  />
)

export const Person = () => (
  <Timespan
    pixelStart={50}
    rowIndex={0}
    id=""
    name="John Doe"
    type="person"
    pixelDuration={1542}
  />
)
