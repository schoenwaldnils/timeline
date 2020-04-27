import { useQuery } from '@apollo/react-hooks'

import timelineCollection from '../gql/timelineCollection'
import { formatTimelineData } from '../js/objectFormating/formatTimelineData'
import { useStore } from '../components/Store'

export const useContentfulTimeline = () => {
  const [state] = useStore()

  let formatedData = {
    events: [],
    timespans: [],
  }

  const { loading, error, data } = useQuery(timelineCollection, {
    variables: { locale: state.lang },
  })

  if (data) {
    formatedData = formatTimelineData(data, state.scale, state.filter)
  }

  return {
    loading,
    error,
    data: formatedData,
  }
}
