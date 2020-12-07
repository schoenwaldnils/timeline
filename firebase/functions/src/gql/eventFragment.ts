export default `
  fragment EventFragment on Event {
    sys {
      id
    }
    name
    year
    image {
      fileName
      url
    }
    richText {
      json
    }
    wolLink
  }
`
