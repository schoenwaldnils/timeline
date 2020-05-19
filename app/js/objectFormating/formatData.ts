import arraySort from 'array-sort'

import { updateTimeProps } from './updateTimeProps'
import { updateEventProps } from './updateEventProps'

export const findParent = (
  linkedFrom,
  id: string,
  type?: 'male' | 'female',
) => {
  const parents = linkedFrom.personCollection.items.filter(({ childs }) => {
    const childIDs =
      childs.items &&
      Object.keys(childs.items).map(key => childs.items[key].sys.id)
    if (!childIDs) return false
    if (childIDs.includes(id)) return true
    return false
  })
  if (!parents.length) return undefined

  if (type) {
    const [parent] = parents.filter(({ gender }) => gender === type)
    if (!parent) {
      return undefined
    }
    return parent.sys.id
  }

  return parents.map(p => p.sys.id)
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
    richText: oldData.richText?.json,
  }

  if (oldData.spouse && oldData.spouse.items.length) {
    const spouse = oldData.spouse.items.map(({ sys: { id }, name }) => {
      return { id, name }
    })

    data.spouse = arraySort(
      spouse,
      (a: { name: string }, b: { name: string }) =>
        a.name.localeCompare(b.name),
    )
  }

  if (oldData.childs && oldData.childs.items.length) {
    const childs = oldData.childs.items.map(({ sys: { id }, name }) => {
      return { id, name }
    })

    data.childs = arraySort(
      childs,
      (a: { name: string }, b: { name: string }) =>
        a.name.localeCompare(b.name),
    )
  }

  return updateTimeProps(data)
}

export function formatParent(oldData) {
  const data = {
    type: 'parent',
    name: oldData.name,
  }

  return data
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
