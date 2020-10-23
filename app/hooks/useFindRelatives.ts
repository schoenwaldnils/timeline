import { useStore, SET_ACTIVE_PERSONS } from '../components/Store'
import { getLocalStorage } from '../js/localStorage'
import { getFirebaseRelatives } from '../utils/getFirebaseRelatives'

export const useFindRelatives = () => {
  const { dispatch } = useStore()

  const fetchRelatives = async (id: string) => {
    console.log('findRelatives')
    const localRelatives = JSON.parse(getLocalStorage('relatives')) || {}

    if (localRelatives[id]) {
      dispatch({
        type: SET_ACTIVE_PERSONS,
        activePersons: localRelatives[id].ancestors,
      })
      return
    }

    const dbRelatives = await getFirebaseRelatives(id)

    if (dbRelatives) {
      // setLocalStorage(
      //   'relatives',
      //   JSON.stringify({
      //     ...localRelatives,
      //     [id]: dbRelatives,
      //   }),
      // )

      dispatch({
        type: SET_ACTIVE_PERSONS,
        activePersons:
          [...dbRelatives.ancestors, ...dbRelatives.descendants] || [],
      })
    } else {
      console.log('No relatives found')
    }
  }

  return fetchRelatives
}
