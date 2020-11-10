import { useCallback, useEffect, useRef } from 'react'
import { useStore, SET_RELATIVES } from '../components/Store'
import { getLocalStorage, setLocalStorage } from '../js/localStorage'
import { useFirebaseRelatives } from './useFirebaseRelatives'

export const useFindRelatives = () => {
  const { dispatch } = useStore()
  const { loadRelatives, data, loading, error } = useFirebaseRelatives()
  const currentId = useRef(undefined)
  const localRelatives = useRef([undefined])

  const getRelatives = useCallback(
    async (id: string) => {
      currentId.current = id
      console.log('findRelatives')
      localRelatives.current = JSON.parse(getLocalStorage('relatives')) || {}

      if (localRelatives[id]) {
        dispatch({
          type: SET_RELATIVES,
          currentPerson: id,
          ancestors: localRelatives[id].ancestors as string[],
          descendants: localRelatives[id].descendants as string[],
        })
        return
      }
      loadRelatives(id)
    },
    [dispatch, loadRelatives],
  )

  useEffect(() => {
    if (data) {
      setLocalStorage(
        'relatives',
        JSON.stringify({
          ...localRelatives.current,
          [currentId.current]: data,
        }),
      )

      dispatch({
        type: SET_RELATIVES,
        currentPerson: currentId.current,
        ancestors: (data.ancestors as string[]) || [],
        descendants: (data.descendants as string[]) || [],
      })
    }
  }, [data])

  return { getRelatives, data, loading, error }
}
