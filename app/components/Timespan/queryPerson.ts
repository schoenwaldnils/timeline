const gql = require('graphql-tag')

export default (id: string, locale: 'de' | 'en' = 'de') => gql`{
  person(
    id: "${id}"
    locale: "${locale}"
  ) {
    items {
      sys {
        id
      }
      name,
      image {
        fileName,
        url
      },
      gender,
      startYear,
      startBlurriness,
      endYear,
      endBlurriness,
      stillActive,
      spouseCollection {
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
      },
      mother {
        sys {
          id
        }
        name
      },
      childsCollection {
        items {
          sys {
            id
          }
          name
        }
      },
      wolLink,
      content,
    }
  }
}`
