export default `
  query($locale: String!) {
    persons: personCollection(
      locale: $locale
      order: [startYear_ASC, name_ASC]
      limit: 1000
    ) {
      items {
        sys {
          id
        }
        name
        startYear
        startBlurriness
        endYear
        endBlurriness
        stillActive
      }
    }
    times: timeCollection(
      locale: $locale
      where: { startYear_exists: true }
      order: [startYear_ASC, name_ASC]
      limit: 1000
    ) {
      items {
        sys {
          id
        }
        name
        startYear
        endYear
      }
    }
    events: eventCollection(
      locale: $locale
      where: { year_exists: true }
      order: [year_ASC, name_ASC]
      limit: 1000
    ) {
      items {
        sys {
          id
        }
        name
        year
      }
    }
  }
`
