import React from 'react'
import { action } from '@storybook/addon-actions'

import { Event } from './index'

export default {
  title: 'Event',
  component: Event,
}

export const Basic = () => (
  <Event
    id=""
    name="Test Event"
    year={-4000}
    handleElementClick={action('click')}
  />
)
