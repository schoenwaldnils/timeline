import { updateTimeProps } from '../../js/updateTimeProps'
import { updateEventProps } from '../../js/updateEventProps'

const findParent = (linkedFrom, id: string, type: 'male' | 'female') => {
  const [parent] = linkedFrom.personCollection.items.filter(
    ({ gender, childs }) => {
      if (gender !== type) return false
      const childIDs =
        childs.items &&
        Object.keys(childs.items).map(key => childs.items[key].sys.id)
      if (!childIDs) return false
      if (childIDs.includes(id)) return true
      return false
    },
  )
  if (!parent) return undefined
  return parent.sys.id
}

export function formatPerson(oldData) {
  const data = {
    type: 'person',
    id: oldData.sys.id,
    name: oldData.name,
    image: oldData.image?.url,
    gender: oldData.gender,
    startYear: oldData.startYear,
    startBlurriness: oldData.startBlurriness,
    endYear: oldData.endYear,
    endBlurriness: oldData.endBlurriness,
    stillActive: oldData.stillActive,
    fatherID: findParent(oldData.linkedFrom, oldData.sys.id, 'male'),
    motherID: findParent(oldData.linkedFrom, oldData.sys.id, 'female'),
    spouse: [],
    childs: [],
    wolLink: oldData.wolLink,
    richText: null,
  }

  if (oldData.spouse && oldData.spouse.items.length) {
    data.spouse = oldData.spouse.items.map(({ sys: { id }, name }) => {
      return { id, name }
    })
  }

  if (oldData.childs && oldData.childs.items.length) {
    data.childs = oldData.childs.items.map(({ sys: { id }, name }) => {
      return { id, name }
    })
  }

  return updateTimeProps(data)
}

export function formatTime(oldData) {
  const data = {
    type: 'time',
    id: oldData.sys.id,
    name: oldData.name,
    image: oldData.image?.url,
    startYear: oldData.startYear,
    endYear: oldData.endYear,
    richText: oldData.richText?.json,
    wolLink: oldData.wolLink,
  }

  return updateTimeProps(data)
}

export function formatEvent(oldData) {
  const data = {
    id: oldData.sys?.id,
    name: oldData.name,
    image: oldData.image?.url,
    year: oldData.year,
    richText: oldData.richText?.json,
    wolLink: oldData.wolLink,
  }

  return updateEventProps(data)
}
