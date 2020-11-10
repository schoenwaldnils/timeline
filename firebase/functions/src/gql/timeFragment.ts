export default `
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
