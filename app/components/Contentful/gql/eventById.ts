import gql from 'graphql-tag'

import eventFragment from './eventFragment'

export default gql`
  query EventById($id: String!, $locale: String!) {
    eventCollection(
      preview: true
      where: { sys: { id: $id } }
      locale: $locale
      limit: 1
    ) {
      items {
        ...EventFragment
      }
    }
  }
  ${eventFragment}
`
