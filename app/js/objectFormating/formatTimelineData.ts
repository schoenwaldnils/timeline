import arraySort from 'array-sort'

import { formatEvent } from './formatData'
import { positionEvents } from './positionEvents'
import { positionTimes } from './positionTimes'
import { scaleNumbers } from '../scaleNumbers'
import { updateTimeProps } from './updateTimeProps'

const showInTimeline = ({
  pixelStart,
  pixelEnd,
}: {
  pixelStart: number
  pixelEnd: number
}) => {
  if (pixelStart && pixelEnd) return true
  return false
}

export const formatTimelineData = (data, scale: number) => {
  const formatedEvents =
    data.events.items && data.events.items.map(e => formatEvent(e))
  const indexedEvents = formatedEvents.map((e, key) => ({
    ...e,
    zIndex: formatedEvents.length - key,
  }))

  const scaledEvents = scaleNumbers(indexedEvents, scale, ['pixelYear'])
  const positionedEvents = positionEvents(scaledEvents)

  // TIMESPANS
  const formatedTimespans = [
    ...(data.persons.items &&
      data.persons.items.map(e =>
        updateTimeProps({ ...e, type: 'person', id: e.sys.id }),
      )),
    ...(data.times.items &&
      data.times.items.map(e =>
        updateTimeProps({ ...e, type: 'time', id: e.sys.id }),
      )),
  ]
  const filteredTimespans = formatedTimespans.filter(t => showInTimeline(t))
  const sortetTimespans = arraySort(filteredTimespans, 'startYear')
  const scaledTimespans = scaleNumbers(sortetTimespans, scale, [
    'pixelStart',
    'pixelEnd',
    'pixelDuration',
    'startBlurriness',
    'endBlurriness',
  ])
  const positionedTimes = positionTimes(scaledTimespans)

  return {
    events: positionedEvents,
    timespans: positionedTimes,
  }
}
