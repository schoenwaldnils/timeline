import gql from 'graphql-tag'

export default gql`
  fragment TimeFragment on Time {
    sys {
      id
    }
    name
    image {
      fileName
      url
    }
    startYear
    endYear
    richText {
      json
    }
    wolLink
  }
`
