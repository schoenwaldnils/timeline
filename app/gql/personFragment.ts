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
          childsCollection {
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
      width
      height
    }
    gender
    startYear
    startBlurriness
    endYear
    endBlurriness
    stillActive
    spouseCollection {
      items {
        sys {
          id
        }
        name
      }
    }
    childsCollection {
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
