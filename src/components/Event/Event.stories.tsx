import { Event } from './Event'

export default {
  title: 'Event',
  component: Event,
}

export const event = () => (
  <Event type="event" id="test" pixelStart={50} name="Test Event" />
)
