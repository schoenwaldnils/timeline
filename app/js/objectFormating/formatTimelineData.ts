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

export const formatTimelineData = (
  data: {
    persons: { items: Array<any> }
    times: { items: Array<any> }
    events: { items: Array<any> }
  },
  scale: number,
  filter?: {
    personsAreActive: boolean
    timesAreActive: boolean
    eventsAreActive: boolean
  },
) => {
  const {
    personsAreActive = true,
    timesAreActive = true,
    eventsAreActive = true,
  } = filter || {}

  // TIMESPANS
  const persons = (personsAreActive && data.persons.items) || []
  const times = (timesAreActive && data.times.items) || []

  const formatedTimespans = [
    ...persons.map(e =>
      updateTimeProps({ ...e, type: 'person', id: e.sys.id }),
    ),
    ...times.map(e => updateTimeProps({ ...e, type: 'time', id: e.sys.id })),
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

  // EVENTS
  const events = (eventsAreActive && data.events.items) || []
  const formatedEvents = events.map(e => formatEvent(e))
  const indexedEvents = formatedEvents.map((e, key) => ({
    ...e,
    zIndex: formatedEvents.length - key,
  }))

  const scaledEvents = scaleNumbers(indexedEvents, scale, ['pixelYear'])
  const positionedEvents = positionEvents(scaledEvents)

  return {
    timespans: positionedTimes,
    events: positionedEvents,
  }
}
