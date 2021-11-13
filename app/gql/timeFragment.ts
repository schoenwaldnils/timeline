export default `
  fragment TimeFragment on Time {
    sys {
      id
    }
    name
    image {
      fileName
      url
      width
      height
    }
    startYear
    endYear
    richText {
      json
    }
    wolLink
  }
`
