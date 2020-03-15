import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ContextLang } from '../ContextLang'
import { Loading } from '../Loading'
import { Timeline } from '../Timeline'

import timelineCollection from './gql/timelineCollection'
import { formatEvent, formatTime } from './formatData'
import { sortObjectArray } from '../../js/sortObjectArray'

export const ContentfulTimeline: React.FC = () => {
  const { language } = useContext(ContextLang)

  const { loading, error, data } = useQuery(timelineCollection, {
    variables: { locale: language },
  })

  if (loading) return <Loading />
  if (error) return <div>Error!</div>

  const formatedEvents =
    data.events.items && data.events.items.map(e => formatEvent(e))

  const formatedTimespans = [
    ...(data.persons.items &&
      data.persons.items.map(e => formatTime(e, 'person'))),
    ...(data.times.items && data.times.items.map(e => formatTime(e))),
  ]

  const filteredTimespans = formatedTimespans.filter(
    ({ startYear }) => !!startYear,
  )

  const sortetTimespans = sortObjectArray(filteredTimespans, 'startYear')

  return <Timeline events={formatedEvents} timespans={sortetTimespans} />
}
