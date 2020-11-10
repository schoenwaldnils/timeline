import { request } from './graphqlRequest'
import { findParents } from './findParents'

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

export const getContentfulAncestors = async (id: string): Promise<string[]> => {
  console.count('getContentfulAncestors')

  const data = await request(query, { id }).catch(err => {
    throw err
  })

  const parents = findParents(
    data.personCollection.items[0].linkedFrom,
    id,
  ) as any

  if (parents && parents.length) {
    const allAncestors = await parents.reduce(
      async (accumulator: string[], current: string) => {
        console.log(typeof accumulator, accumulator)
        const isNew = !accumulator.includes(current)
        const newAncestors = isNew ? await getContentfulAncestors(current) : []
        return [...accumulator, ...newAncestors]
      },
      [],
    )

    return [...parents, ...allAncestors]
  }

  return []
}
