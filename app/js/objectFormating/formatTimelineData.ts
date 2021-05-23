import arraySort from 'array-sort'

import { CEvent, CPerson, CTime } from '../../../@types/generated/contentful'
import { TimelineEvent } from '../../../@types/TimelineEvent'
import { Timespan } from '../../../@types/Timespan'
import { scaleNumber, scaleNumbers } from '../scaleNumbers'
import { formatEvent } from './formatData'
import { positionTimes } from './positionTimes'
import { updateTimeProps } from './updateTimeProps'

const showInTimeline = ({ pixelStart, pixelEnd }: Timespan) => {
  if (pixelStart && pixelEnd) return true
  return false
}

export type ContentfulTimelineData = {
  persons: { items: CPerson[] }
  times: { items: CTime[] }
  events: { items: CEvent[] }
}

export type TimelineData = {
  rows: number
  timespans: Timespan[]
  events: TimelineEvent[]
}

export const formatTimelineData = (
  data: ContentfulTimelineData,
  scale: number,
  filter?: {
    personsAreActive: boolean
    timesAreActive: boolean
    eventsAreActive: boolean
  },
): TimelineData => {
  const {
    personsAreActive = true,
    timesAreActive = true,
    eventsAreActive = true,
  } = filter || {}

  // TIMESPANS
  const persons = (personsAreActive && data.persons.items) || []
  const times = (timesAreActive && data.times.items) || []

  const formatedTimespans = [
    ...persons.map((e) =>
      updateTimeProps({ ...e, type: 'person', id: e.sys.id }),
    ),
    ...times.map((e) => updateTimeProps({ ...e, type: 'time', id: e.sys.id })),
  ]
  const filteredTimespans = formatedTimespans.filter((t) => showInTimeline(t))
  const sortetTimespans = arraySort(filteredTimespans, 'startYear')
  const scaledTimespans = scaleNumbers(sortetTimespans, scale, [
    'pixelStart',
    'pixelEnd',
    'pixelDuration',
    'startBlurriness',
    'endBlurriness',
  ]) as Timespan[]

  // EVENTS
  const events = (eventsAreActive && data.events.items) || []
  const formatedEvents = events.map((e) => formatEvent(e))
  const indexedEvents = formatedEvents.map(
    (e, key) =>
      ({
        ...e,
        type: 'event',
        zIndex: formatedEvents.length - key,
        pixelStart: scaleNumber(e.pixelStart, scale),
      } as TimelineEvent),
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
