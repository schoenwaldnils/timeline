import { useQuery } from 'graphql-hooks'

import timelineCollection from '../gql/timelineCollection'
import { formatTimelineData } from '../js/objectFormating/formatTimelineData'
import { useStore } from '../components/Store'
import { useLocale } from '../context/LocaleContext'

export const useContentfulTimeline = () => {
  const { locale } = useLocale()
  const [state] = useStore()

  let formatedData = {
    events: [],
    timespans: [],
  }

  const { loading, error, data, cacheHit } = useQuery(timelineCollection, {
    variables: { locale },
  })

  console.log({ cacheHit })

  if (data) {
    formatedData = formatTimelineData(data, state.scale, state.filter)
  }

  return {
    loading,
    error,
    data: formatedData,
  }
}
