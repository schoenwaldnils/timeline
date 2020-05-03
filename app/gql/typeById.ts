import personFragment from './personFragment'
import eventFragment from './eventFragment'
import timeFragment from './timeFragment'

export const typeById = `
  query($id: String!, $locale: String!) {
    person: personCollection(
      where: { sys: { id: $id } }
      locale: $locale
      limit: 1
    ) {
      items {
        ...PersonFragment
      }
    }
    time: timeCollection(
      where: { sys: { id: $id } }
      locale: $locale
      limit: 1
    ) {
      items {
        ...TimeFragment
      }
    }
    event: eventCollection(
      where: { sys: { id: $id } }
      locale: $locale
      limit: 1
    ) {
      items {
        ...EventFragment
      }
    }
  }
  ${personFragment}
  ${timeFragment}
  ${eventFragment}
`
