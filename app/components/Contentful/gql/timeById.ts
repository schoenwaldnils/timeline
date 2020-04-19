import gql from 'graphql-tag'

import timeFragment from './timeFragment'

export default gql`
  query TimeById($id: String!, $locale: String!) {
    timeCollection(where: { sys: { id: $id } }, locale: $locale, limit: 1) {
      items {
        ...TimeFragment
      }
    }
  }
  ${timeFragment}
`
