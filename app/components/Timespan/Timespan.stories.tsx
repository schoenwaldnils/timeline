import React from 'react'

import { Timespan } from './index'

export default {
  title: 'Timespan',
  component: Timespan,
}

export const Time = () => (
  <Timespan id="" name="Event Lorem Ipsum" type="time" duration={537} />
)

export const Person = () => (
  <Timespan id="" name="John Doe" type="person" duration={1542} />
)
