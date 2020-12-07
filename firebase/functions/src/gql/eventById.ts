import eventFragment from './eventFragment'

export default `
  query EventById($id: String!, $locale: String!) {
    eventCollection(where: { sys: { id: $id } }, locale: $locale, limit: 1) {
      items {
        ...EventFragment
      }
    }
  }
  ${eventFragment}
`
