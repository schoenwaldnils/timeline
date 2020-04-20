import gql from 'graphql-tag'

export const parentById = gql`
  query ParentById($id: String!, $locale: String!) {
    personCollection(where: { sys: { id: $id } }, locale: $locale, limit: 1) {
      items {
        name
      }
    }
  }
`
