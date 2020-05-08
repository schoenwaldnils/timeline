import { useState } from 'react'
import { useQuery } from 'react-query'
import shallowequal from 'shallowequal'

import { useStore } from '../components/Store'
import { useLocale } from '../context/LocaleContext'
import { formatTimelineData } from '../js/objectFormating/formatTimelineData'
import { fetchTimelineData } from '../lib/fetchTimelineData'

export const useTimelineData = serverData => {
  const { locale } = useLocale()
  const [state] = useStore()
  const [isInitial, setIsInitial] = useState(true)
  const [data, setData] = useState(serverData)

  const { status, data: clientTimlineData, error } = useQuery(
    locale && ['timelineData', locale],
    fetchTimelineData,
  )

  if (status === 'error') console.error(error)

  if (
    isInitial &&
    status === 'success' &&
    !shallowequal(serverData, clientTimlineData)
  ) {
    setData(clientTimlineData)
    setIsInitial(false)
  }

  let formatedData = {
    events: [],
    timespans: [],
  }

  if (data) {
    formatedData = formatTimelineData(data, state.scale, state.filter)
  }

  return formatedData
}
