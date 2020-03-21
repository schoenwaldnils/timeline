import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ContextLang } from '../ContextLang'
import { Loading } from '../Loading'
import { ContentTime } from '../Content/ContentTime'
import { formatTime } from './formatData'

import timeById from './gql/timeById'

interface Props {
  id: string
}

export const ContentfulTime: React.FC<Props> = ({ id }) => {
  const { language } = useContext(ContextLang)

  const { loading, error, data } = useQuery(timeById, {
    variables: { id, locale: language },
  })

  if (loading) return <Loading />
  if (error || data.timeCollection.items[0].length < 1) return <div>Error!</div>

  const cleanedTime = formatTime(data.timeCollection.items[0])

  return <ContentTime {...cleanedTime} />
}
