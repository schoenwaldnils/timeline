import { action } from '@storybook/addon-actions'
import { FC } from 'react'

import { EventView } from './EventView'

export default {
  title: 'Event',
  component: EventView,
}

export const Basic: FC = () => (
  <EventView pixelStart={50} changeContent={action('changeContent')}>
    Test Event
  </EventView>
)
