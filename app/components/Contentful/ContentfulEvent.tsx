import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ContextLang } from '../ContextLang'
import { Loading } from '../Loading'
import { ContentEvent } from '../Content/ContentEvent'
import { formatEvent } from './formatData'

import eventById from './gql/eventById'

interface Props {
  id: string
}

export const ContentfulEvent: React.FC<Props> = ({ id }) => {
  const { language } = useContext(ContextLang)

  const { loading, error, data } = useQuery(eventById, {
    variables: { id, locale: language },
  })

  if (loading) return <Loading />
  if (error || data.eventCollection.items[0].length < 1)
    return <div>Error!</div>

  const cleanedEvent = formatEvent(data.eventCollection.items[0])

  return <ContentEvent {...cleanedEvent} />
}
