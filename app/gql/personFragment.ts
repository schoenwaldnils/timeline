export default `
  fragment PersonFragment on Person {
    sys {
      id
    }
    linkedFrom {
      personCollection(locale: "en") {
        items {
          sys {
            id
          }
          gender
          childs: childsCollection {
            items {
              sys {
                id
              }
            }
          }
        }
      }
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
