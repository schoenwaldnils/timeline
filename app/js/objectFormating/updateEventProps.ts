import { Event } from '../../../@types/Event'
import { calcTimes } from '../calcTimes'

export const updateEventProps = (event: Event): Event => {
  const { pixelStart } = calcTimes({
    startYear: event.year,
  })

  return {
    ...event,
    pixelYear: pixelStart,
  }
}
