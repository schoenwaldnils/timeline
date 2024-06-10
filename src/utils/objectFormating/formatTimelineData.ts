import arraySort from 'array-sort'

import type { Event, Person, Time } from '@/@types/generated/contentful'
import { TimelineEvent } from '@/@types/TimelineEvent'
import { Timespan } from '@/@types/Timespan'
import { Store } from '@/hooks/useStore'

import { scaleNumber, scaleNumbers } from '../scaleNumbers'
import { formatEvent } from './formatData'
import { positionTimes } from './positionTimes'
import { updateTimeProps } from './updateTimeProps'

const showInTimeline = ({ pixelStart, pixelEnd }: Timespan) => {
  if (pixelStart && pixelEnd) return true
  return false
}

export type ContentfulTimelineData = {
  persons: { items: Person[] }
  times: { items: Time[] }
  events: { items: Event[] }
}

export type TimelineData = {
  rows: number
  timespans: Timespan[]
  events: TimelineEvent[]
}

export const formatTimelineData = (
  data: ContentfulTimelineData,
  scale: number,
  filter?: Store['filter'],
): TimelineData => {
  const {
    showPersons = true,
    showTimes = true,
    showEvents = true,
  } = filter || {}

  // TIMESPANS
  const persons = (showPersons && data.persons.items) || []
  const times = (showTimes && data.times.items) || []

  const formatedTimespans = [
    ...persons.map((e) =>
      updateTimeProps({
        ...e,
        type: 'person',
        id: e.sys.id,
      } as unknown as Timespan),
    ),
    ...times.map((e) =>
      updateTimeProps({
        ...e,
        type: 'time',
        id: e.sys.id,
      } as unknown as Timespan),
    ),
  ]
  const filteredTimespans = formatedTimespans.filter((t) => showInTimeline(t))
  const sortetTimespans = arraySort(filteredTimespans, 'startYear')
  const scaledTimespans = scaleNumbers(sortetTimespans, scale, [
    'pixelStart',
    'pixelEnd',
    'pixelDuration',
    'startBlurriness',
    'endBlurriness',
  ])

  // EVENTS
  const events = (showEvents && data.events.items) || []
  const formatedEvents = events.map((e) => formatEvent(e))

  const indexedEvents = formatedEvents
    .filter((e) => e?.year)
    .map(
      (e, key) =>
        ({
          ...e,
          type: 'event',
          zIndex: formatedEvents.length - key,
          pixelStart: scaleNumber(e!.year!, scale),
        }) as TimelineEvent,
    )

  const { rows, positionedTimes, positionedEvents } = positionTimes(
    scaledTimespans,
    indexedEvents,
  )

  return {
    rows,
    timespans: positionedTimes,
    events: positionedEvents,
  }
}
