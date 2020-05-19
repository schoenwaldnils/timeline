import { useState } from 'react'
import { findParent } from '../js/objectFormating/formatData'
import { request } from '../lib/graphqlRequest'
import { useStore, SET_ACTIVE_PERSONS } from '../components/Store'

const query = `
query PersonById($id: String!) {
  personCollection(where: { sys: { id: $id } }, limit: 1) {
    items {
      linkedFrom {
        personCollection(locale: "en") {
          items {
            sys {
              id
            }
            gender
            childs: childsCollection {
              items {
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export const useFindRelatives = () => {
  const [relatives, setRelatives] = useState([])
  const [, dispatch] = useStore()

  console.log('useFindRelatives')

  const findRelatives = async (id: string) => {
    console.log('findRelatives')
    const data = await request(query, { id })
    const parents = findParent(data.personCollection.items[0].linkedFrom, id)
    if (
      parents &&
      parents.length &&
      !parents.every((a: string) => relatives.includes(a))
    ) {
      dispatch({
        type: SET_ACTIVE_PERSONS,
        activePersons: parents,
      })

      setRelatives(currentRelatives => [...currentRelatives, ...parents])

      await Promise.all(
        parents.map(async (parentId: string) => {
          await findRelatives(parentId)
        }),
      )
    }
  }

  return {
    relatives,
    findRelatives,
  }
}
