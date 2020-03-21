import gql from 'graphql-tag'

export const typeById = gql`
  query($id: String!) {
    person: personCollection(where: { sys: { id: $id } }) {
      items {
        sys {
          id
        }
      }
    }
    time: timeCollection(where: { sys: { id: $id } }) {
      items {
        sys {
          id
        }
      }
    }
    event: eventCollection(where: { sys: { id: $id } }) {
      items {
        sys {
          id
        }
      }
    }
  }
`
