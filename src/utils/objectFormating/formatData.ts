import orderBy from 'lodash/orderBy'

import { Event } from '@/@types/Event'
import { CEvent, CPerson, CTime } from '@/@types/generated/contentful'
import { Parent } from '@/@types/Parent'
import { Person } from '@/@types/Person'
import { Time } from '@/@types/Time'

import { getTimePeriod } from '../utils'
import { updateEventProps } from './updateEventProps'

const findParent = (
  linkedFrom,
  id: string,
  type: 'male' | 'female',
): string | undefined => {
  const parents = (linkedFrom.personCollection.items as CPerson[]).filter(
    ({ gender, childsCollection }) => {
      if (gender !== type) return false
      const childIDs =
        childsCollection.items &&
        Object.keys(childsCollection.items).map(
          (key) => childsCollection.items[key].sys.id,
        )
      if (!childIDs) return false
      if (childIDs.includes(id)) return true
      return false
    },
  )

  const parent = parents[0] || undefined

  if (!parent) return undefined
  return parent.sys.id
}

export function formatPerson(oldData: CPerson): Person {
  const data = {
    type: 'person',
    id: oldData.sys.id,
    name: oldData.name,
    image: oldData.image && {
      src: oldData.image.url,
      width: oldData.image.width,
      height: oldData.image.height,
    },
    gender: oldData.gender,
    startYear: oldData.startYear,
    startBlurriness: oldData.startBlurriness,
    endYear: oldData.endYear,
    endBlurriness: oldData.endBlurriness,
    age:
      oldData.startYear && oldData.endYear
        ? getTimePeriod(oldData.startYear, oldData.endYear)
        : undefined,
    stillActive: oldData.stillActive,
    fatherID: findParent(oldData.linkedFrom, oldData.sys.id, 'male'),
    motherID: findParent(oldData.linkedFrom, oldData.sys.id, 'female'),
    spouse: [],
    childs: [],
    wolLink: oldData.wolLink,
    richText: oldData.richText?.json,
  }

  if (oldData.spouseCollection && oldData.spouseCollection.items.length) {
    const spouse = oldData.spouseCollection.items.map(
      ({ sys: { id }, name }) => {
        return { id, name }
      },
    )

    data.spouse = orderBy(spouse, ['name'])
  }

  if (oldData.childsCollection && oldData.childsCollection.items.length) {
    const childs = oldData.childsCollection.items.map(
      ({ sys: { id }, name }) => {
        return { id, name }
      },
    )

    data.childs = orderBy(childs, ['name'])
  }

  return data
}

export function formatParent(oldData: CPerson): Parent {
  return {
    type: 'parent',
    name: oldData.name,
  }
}

export function formatTime(oldData: CTime): Time {
  const data = {
    type: 'time',
    id: oldData.sys.id,
    name: oldData.name,
    image: oldData.image && {
      src: oldData.image.url,
      width: oldData.image.width,
      height: oldData.image.height,
    },
    startYear: oldData.startYear,
    endYear: oldData.endYear,
    richText: oldData.richText?.json,
    wolLink: oldData.wolLink,
  }

  return data
}

export function formatEvent(oldData: CEvent): Event {
  const year = oldData.year === 2020 ? new Date().getFullYear() : oldData.year

  const data = {
    id: oldData.sys.id,
    name: oldData.name,
    image: oldData.image && {
      src: oldData.image.url,
      width: oldData.image.width,
      height: oldData.image.height,
    },
    year,
    richText: oldData.richText?.json,
    wolLink: oldData.wolLink,
  }

  return updateEventProps(data)
}
