import timeFragment from './timeFragment'

export default `
  query TimeById($id: String!, $locale: String!) {
    timeCollection(where: { sys: { id: $id } }, locale: $locale, limit: 1) {
      items {
        ...TimeFragment
      }
    }
  }
  ${timeFragment}
`
