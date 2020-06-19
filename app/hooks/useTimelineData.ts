import { useState } from 'react'
import { useQuery } from 'react-query'

import { useStore } from '../components/Store'
import { formatTimelineData } from '../js/objectFormating/formatTimelineData'
import { fetchTimelineData } from '../lib/fetchTimelineData'

export const useTimelineData = () => {
  const [state] = useStore()
  const { locale } = state
  const [isFetched, setIsFetched] = useState({
    en: false,
    de: false,
  })
  const [data, setData] = useState({
    en: undefined,
    de: undefined,
  })

  const { status, data: clientTimlineData, error } = useQuery(
    locale && !isFetched[locale] && ['timelineData', locale],
    fetchTimelineData,
  )

  if (isFetched[locale]) {
    return formatTimelineData(data[locale], state.scale, state.filter)
  }

  if (status === 'error') console.error(error)

  if (status === 'success') {
    setIsFetched({
      ...isFetched,
      [locale]: true,
    })
    setData({
      ...data,
      [locale]: clientTimlineData,
    })
  }

  const formatedData = {
    events: [],
    timespans: [],
  }

  return formatedData
}
