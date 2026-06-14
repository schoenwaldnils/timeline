import { Event } from '@/@types/Event'

import { calcTimes } from '../calcTimes'

export const updateEventProps = (event: Event): Event => {
  const calcedTimes = calcTimes({
    startYear: event.year,
  })

  if (!calcedTimes) {
    return event
  }

  return {
    ...event,
    year: calcedTimes.pixelStart,
  }
}
