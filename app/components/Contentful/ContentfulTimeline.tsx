import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import arraySort from 'array-sort'

import { ContextLang } from '../ContextLang'
import { ContextScale } from '../ContextScale'
import { Loading } from '../Loading'
import { Timeline } from '../Timeline'

import timelineCollection from './gql/timelineCollection'
import { formatEvent } from './formatData'
import { positionEvents } from './positionEvents'
import { positionTimes } from './positionTimes'
import { scaleNumbers } from '../../js/scaleNumbers'
import { updateTimeProps } from '../../js/updateTimeProps'

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

export const ContentfulTimeline = React.forwardRef((_props, ref) => {
  const { language } = useContext(ContextLang)
  const { scale } = useContext(ContextScale)

  const { loading, error, data } = useQuery(timelineCollection, {
    variables: { locale: language },
  })

  if (loading) return <Loading />
  if (error) return <div>Error!</div>

  // EVENTS
  const formatedEvents =
    data.events.items && data.events.items.map(e => formatEvent(e))
  const indexedEvents = formatedEvents.map((e, key) => ({
    ...e,
    zIndex: formatedEvents.length - key,
  }))
  const positionedEvents = positionEvents(indexedEvents)
  const scaledEvents = scaleNumbers(positionedEvents, scale, ['pixelYear'])

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
  const positionedTimes = positionTimes(sortetTimespans)
  const scaledTimes = scaleNumbers(positionedTimes, scale, [
    'pixelStart',
    'pixelEnd',
    'pixelDuration',
    'startBlurriness',
    'endBlurriness',
  ])

  return (
    <Timeline
      ref={ref}
      events={scaledEvents}
      timespans={scaledTimes}
      scale={scale}
    />
  )
})
