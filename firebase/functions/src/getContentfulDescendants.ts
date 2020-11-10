import { request } from './graphqlRequest'

const query = `
query PersonById($id: String!) {
  personCollection(where: { sys: { id: $id } }, limit: 1) {
    items {
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
`

export const getContentfulDescendants = async (
  id: string,
): Promise<string[]> => {
  console.count('getContentfulDescendants')

  const data = await request(query, { id }).catch(err => {
    throw err
  })
  const children = data.personCollection.items[0].childs.items.map(
    (child: any) => child.sys.id,
  )

  if (children && children.length) {
    const allDescendants = await children.reduce(
      async (accumulator: string[], current: string) => {
        const isNew = !accumulator.includes(current)
        return [
          ...accumulator,
          ...(isNew ? await getContentfulDescendants(current) : []),
        ]
      },
      [],
    )

    return [...children, ...allDescendants]
  }

  return []
}
