import React from 'react'
import { action } from '@storybook/addon-actions'

import { EventView } from './EventView'

export default {
  title: 'Event',
  component: EventView,
}

export const Basic = () => (
  <EventView pixelYear={50} changeContent={action('changeContent')}>
    Test Event
  </EventView>
)
