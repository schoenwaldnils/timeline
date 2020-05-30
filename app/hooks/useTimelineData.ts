import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import shallowequal from 'shallowequal'

import { useStore } from '../components/Store'
import { useLocale } from '../context/LocaleContext'
import { formatTimelineData } from '../js/objectFormating/formatTimelineData'
import { fetchTimelineData } from '../lib/fetchTimelineData'
import { isBrowser } from '../utils/isBrowser'

if (isBrowser) {
  // eslint-disable-next-line global-require
  require('requestidlecallback-polyfill')
}

type RequestIdleCallbackHandle = any
type RequestIdleCallbackOptions = {
  timeout: number
}
type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean
  timeRemaining: () => number
}

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

  useEffect(() => {
    const handleIdle = () => {
      if (
        isInitial &&
        status === 'success' &&
        !shallowequal(serverData, clientTimlineData)
      ) {
        setData(clientTimlineData)
        setIsInitial(false)
      }
    }
    const handler = window.requestIdleCallback(handleIdle)
    return () => {
      window.cancelIdleCallback(handler)
    }
  }, [clientTimlineData, isInitial, serverData, status])

  let formatedData = {
    events: [],
    timespans: [],
  }

  if (data) {
    formatedData = formatTimelineData(data, state.scale, state.filter)
  }

  return formatedData
}
