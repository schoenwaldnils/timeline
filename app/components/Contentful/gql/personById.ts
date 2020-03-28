import gql from 'graphql-tag'

import personFragment from './personFragment'

export const personById = gql`
  query PersonById($id: String!, $locale: String!) {
    personCollection(where: { sys: { id: $id } }, locale: $locale, limit: 1) {
      items {
        ...PersonFragment
      }
    }
  }
  ${personFragment}
`
