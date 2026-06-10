import arraySort from 'array-sort'

import { TimelineEvent } from '@/@types/TimelineEvent'
import { Timespan } from '@/@types/Timespan'
import { Store } from '@/hooks/useStore'
import type {
  Event as PayloadEvent,
  Person as PayloadPerson,
  Time as PayloadTime,
} from '@/payload-types'

import { scaleNumber, scaleNumbers } from '../scaleNumbers'
import { formatEvent } from './formatData'
import { positionTimes } from './positionTimes'
import { updateEventProps } from './updateEventProps'
import { updateTimeProps } from './updateTimeProps'

const showInTimeline = ({ pixelStart, pixelEnd }: Timespan) => {
  if (pixelStart && pixelEnd) return true
  return false
}

// The timeline query selects only the fields below, so the documents are
// narrowed accordingly (Payload's `select` narrows the returned type too).
export type TimelinePerson = Pick<
  PayloadPerson,
  'id' | 'name' | 'startYear' | 'startBlurriness' | 'endYear' | 'endBlurriness' | 'stillActive'
>
export type TimelineTime = Pick<PayloadTime, 'id' | 'name' | 'startYear' | 'endYear'>
export type TimelineEventDoc = Pick<PayloadEvent, 'id' | 'name' | 'year'>

export type TimelineQueryData = {
  persons: TimelinePerson[]
  times: TimelineTime[]
  events: TimelineEventDoc[]
}

export type TimelineData = {
  rows: number
  timespans: Timespan[]
  events: TimelineEvent[]
}

export const formatTimelineData = (
  data: TimelineQueryData,
  scale: number,
  filter?: Store['filter'],
): TimelineData => {
  const { showPersons = true, showTimes = true, showEvents = true } = filter || {}

  // TIMESPANS
  const persons = (showPersons && data.persons) || []
  const times = (showTimes && data.times) || []

  const formatedTimespans = [
    ...persons.map((e) =>
      updateTimeProps({
        ...e,
        type: 'person',
        id: String(e.id),
      } as unknown as Timespan),
    ),
    ...times.map((e) =>
      updateTimeProps({
        ...e,
        type: 'time',
        id: String(e.id),
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
  const events = (showEvents && data.events) || []
  const formatedEvents = events.map((e) => updateEventProps(formatEvent(e)))

  const indexedEvents = formatedEvents
    .filter((e) => e?.year)
    .map(
      (e, key) =>
        ({
          ...e,
          type: 'event',
          zIndex: formatedEvents.length - key,
          pixelStart: scaleNumber(e.year, scale),
        }) as TimelineEvent,
    )

  const { rows, positionedTimes, positionedEvents } = positionTimes(scaledTimespans, indexedEvents)

  return {
    rows,
    timespans: positionedTimes,
    events: positionedEvents,
  }
}
