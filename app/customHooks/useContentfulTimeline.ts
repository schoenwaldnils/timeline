import { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ContextLang } from '../components/ContextLang'
import { ContextScale } from '../components/ContextScale'

import timelineCollection from '../gql/timelineCollection'
import { formatTimelineData } from '../js/objectFormating/formatTimelineData'

export const useContentfulTimeline = () => {
  const { language } = useContext(ContextLang)
  const { scale } = useContext(ContextScale)

  let formatedData = {
    events: [],
    timespans: [],
  }

  const { loading, error, data } = useQuery(timelineCollection, {
    variables: { locale: language },
  })

  if (data) {
    formatedData = formatTimelineData(data, scale)
  }

  return {
    loading,
    error,
    data: formatedData,
  }
}
