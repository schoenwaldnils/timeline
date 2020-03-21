import gql from 'graphql-tag'

export default gql`
  fragment EventFragment on Event {
    sys {
      id
    }
    title: name
    year
    richText {
      json
    }
    wolLink
  }
`
