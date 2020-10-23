import { useState } from 'react'
import { useQuery } from 'react-query'

import { useStore } from '../components/Store'
import { formatTimelineData } from '../js/objectFormating/formatTimelineData'
import { fetchTimelineData } from '../lib/fetchTimelineData'

export const useTimelineData = () => {
  const { store } = useStore()
  const { locale } = store
  const [isFetched, setIsFetched] = useState({
    en: false,
    de: false,
  })
  const [data, setData] = useState({
    en: undefined,
    de: undefined,
  })

  const { isError, data: clientTimlineData, error } = useQuery(
    ['timelineData', locale],
    fetchTimelineData,
    {
      enabled: locale && !isFetched[locale],
    },
  )

  if (isFetched[locale]) {
    return formatTimelineData(data[locale], store.scale, store.filter)
  }

  if (isError) console.error(error)

  if (clientTimlineData) {
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
