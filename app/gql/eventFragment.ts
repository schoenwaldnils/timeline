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
      width
      height
    }
    richText {
      json
    }
    wolLink
  }
`
