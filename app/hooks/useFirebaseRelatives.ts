import { useCallback } from 'react'
import useFetch from 'use-http'

const URL = 'https://europe-west2-schoenworld-timeline.cloudfunctions.net'
// const URL =
//   'http://localhost:5001/schoenworld-timeline/us-central1/getRelatives'

export const useFirebaseRelatives = () => {
  const [request] = useFetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })

  const loadRelatives = useCallback(
    (id: string) => {
      return request.post('/getRelatives', { entityId: id })
    },
    [request],
  )

  return {
    loadRelatives,
    data: request.data,
    loading: request.loading,
    error: request.error,
  }
}
