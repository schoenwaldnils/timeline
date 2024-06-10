import orderBy from 'lodash/orderBy'

import { AlgoliaIndex } from '@/@types/algolia.d'
import { Child } from '@/@types/Child.d'
import { Data, FormatedData } from '@/@types/Data.d'
import { Event } from '@/@types/Event.d'
import {
  Event as CEvent,
  Person as CPerson,
  Time as CTime,
} from '@/@types/generated/contentful.d'
import { Parent } from '@/@types/Parent.d'
import { Person } from '@/@types/Person.d'
import { Time } from '@/@types/Time.d'

import { getTimePeriod } from '../utils'
import { updateEventProps } from './updateEventProps'

const findParents = (
  linkedFrom: CPerson['linkedFrom'],
  id: string,
): Parent[] => {
  const parents = (linkedFrom?.personCollection?.items as CPerson[]).filter(
    ({ childsCollection }) => {
      const childIDs = childsCollection?.items
        .filter((i) => i?.sys.id)
        .map((i) => i?.sys.id)
      if (!childIDs?.length) return false
      if (childIDs.includes(id)) return true
      return false
    },
  ) as unknown as Parent[]

  if (!parents.length) return []

  return parents
}

export function formatPerson(oldData: CPerson): Person {
  const data: Person = {
    id: oldData.sys.id,
    name: oldData.name!,
    image: undefined,
    gender: oldData.gender!,
    startYear: oldData.startYear,
    startBlurriness: oldData.startBlurriness,
    endYear: oldData.endYear,
    endBlurriness: oldData.endBlurriness,
    age:
      oldData.startYear && oldData.endYear
        ? getTimePeriod(oldData.startYear, oldData.endYear)
        : undefined,
    stillActive: oldData.stillActive,
    parents: findParents(oldData.linkedFrom, oldData.sys.id),
    spouse: [],
    childs: [],
    wolLink: oldData.wolLink,
    richText: oldData.richText?.json,
  }

  if (oldData.image?.url && oldData.image.width && oldData.image.height) {
    data.image = {
      src: oldData.image.url,
      width: oldData.image.width,
      height: oldData.image.height,
    }
  }

  if (oldData.spouseCollection && oldData.spouseCollection.items.length) {
    const spouse = oldData.spouseCollection.items
      .map(({ sys: { id }, name, gender }) => {
        if (!id || !name || !gender) {
          return null
        }
        return { id, name, gender }
      })
      .filter(Boolean)

    data.spouse = orderBy(spouse, ['name'])
  }

  if (oldData.childsCollection && oldData.childsCollection.items.length) {
    const childs = oldData.childsCollection.items.map(
      ({ sys, name, gender }) => ({ sys, name, gender }),
    ) as Child[]

    data.childs = orderBy(childs, ['name'])
  }

  return data
}

export function formatTime(oldData: CTime): Time {
  const data: Time = {
    id: oldData.sys.id,
    name: oldData.name,
    image: undefined,
    startYear: oldData.startYear,
    endYear: oldData.endYear,
    richText: oldData.richText?.json,
    wolLink: oldData.wolLink,
  }

  if (oldData.image?.url && oldData.image.width && oldData.image.height) {
    data.image = {
      src: oldData.image.url,
      width: oldData.image.width,
      height: oldData.image.height,
    }
  }

  return data
}

export function formatEvent(oldData: CEvent): Event {
  const year = oldData.year === 2020 ? new Date().getFullYear() : oldData.year

  const data: Event = {
    id: oldData.sys.id,
    name: oldData.name!,
    image: undefined,
    year: year!,
    richText: oldData.richText?.json,
    wolLink: oldData.wolLink,
  }

  if (oldData.image?.url && oldData.image.width && oldData.image.height) {
    data.image = {
      src: oldData.image.url,
      width: oldData.image.width,
      height: oldData.image.height,
    }
  }

  return updateEventProps(data)
}

export const formatData = <T extends AlgoliaIndex>(
  type: T,
  data: Data<T>,
): FormatedData<T> | null => {
  if (!data) return null

  switch (type) {
    case 'person':
      return formatPerson(data as unknown as CPerson) as FormatedData<T>
    case 'event':
      return formatEvent(data as unknown as CEvent) as FormatedData<T>
    case 'time':
      return formatTime(data as unknown as CTime) as FormatedData<T>
    default:
      return null
  }
}
