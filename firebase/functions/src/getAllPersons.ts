import { request } from './graphqlRequest'

const query = `
query {
  personCollection(limit: 1000) {
    items {
      sys {
        id
      }
    }
  }
}
`

export const getAllPersons = async () => {
  // eslint-disable-next-line no-console
  console.log('getAllPersons')

  const data = await request(query).catch(err => {
    console.error(err)
    throw err
  })

  const persons = data.personCollection.items.map((p: any) => p.sys.id)

  return persons
}
