import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import sortArray from 'sort-array'

import { ContextLang } from '../ContextLang'
import { ContextScale } from '../ContextScale'
import { Loading } from '../Loading'
import { Timeline } from '../Timeline'

import timelineCollection from './gql/timelineCollection'
import { formatEvent, formatTime } from './formatData'
import { positionEvents } from './positionEvents'
import { positionTimes } from './positionTimes'
import { scaleNumbers } from '../../js/scaleNumbers'

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

export const ContentfulTimeline: React.FC = () => {
  const { language } = useContext(ContextLang)
  const { scale } = useContext(ContextScale)

  const { loading, error, data } = useQuery(timelineCollection, {
    variables: { locale: language },
  })

  if (loading) return <Loading />
  if (error) return <div>Error!</div>

  const formatedEvents =
    data.events.items && data.events.items.map(e => formatEvent(e))

  const indexedEvents = formatedEvents.map((e, key) => ({
    ...e,
    zIndex: formatedEvents.length - key,
  }))

  const positionedEvents = positionEvents(indexedEvents)

  const eventKeyMap = ['pixelYear']

  const scaledEvents = scaleNumbers(positionedEvents, scale, eventKeyMap)

  const formatedTimespans = [
    ...(data.persons.items &&
      data.persons.items.map(e => formatTime(e, 'person'))),
    ...(data.times.items && data.times.items.map(e => formatTime(e, 'time'))),
  ]

  const filteredTimespans = formatedTimespans.filter(t => showInTimeline(t))

  const sortetTimespans = sortArray(filteredTimespans, {
    by: 'startYear',
  })
  const positionedTimes = positionTimes(sortetTimespans)

  const timeKeyMap = [
    'pixelStart',
    'pixelEnd',
    'pixelDuration',
    'startBlurriness',
    'endBlurriness',
  ]

  const scaledTimes = scaleNumbers(positionedTimes, scale, timeKeyMap)

  return (
    <Timeline events={scaledEvents} timespans={scaledTimes} scale={scale} />
  )
}
