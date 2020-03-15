import gql from 'graphql-tag'

export default gql`
  fragment PersonFragment on Person {
    sys {
      id
    }
    name
    image {
      fileName
      url
    }
    gender
    startYear
    startBlurriness
    endYear
    endBlurriness
    stillActive
    spouse: spouseCollection {
      items {
        sys {
          id
        }
        name
      }
    }
    father {
      sys {
        id
      }
      name
    }
    mother {
      sys {
        id
      }
      name
    }
    childs: childsCollection {
      items {
        sys {
          id
        }
        name
      }
    }
    wolLink
    richText {
      json
    }
  }
`
