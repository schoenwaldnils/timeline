import orderBy from 'lodash/orderBy'

import type { Event } from '@/@types/Event.d'
import type { Person, RelatedPerson } from '@/@types/Person.d'
import type { Time } from '@/@types/Time.d'
import type {
  Event as PayloadEvent,
  Media,
  Person as PayloadPerson,
  Time as PayloadTime,
} from '@/payload-types'

import { getTimePeriod } from '../utils'

type ImageData = { src: string; width: number; height: number }

/** Normalize a Payload media relation (id | Media | null) to the frontend image shape. */
const relImage = (image: number | Media | null | undefined): ImageData | undefined => {
  if (image && typeof image === 'object' && image.url && image.width && image.height) {
    return { src: image.url, width: image.width, height: image.height }
  }
  return undefined
}

/** Keep only populated (depth >= 1) related Person documents. */
const isPersonObject = (value: number | PayloadPerson): value is PayloadPerson =>
  typeof value === 'object'

const toRelatedPerson = (person: PayloadPerson): RelatedPerson => ({
  id: String(person.id),
  name: person.name,
  gender: person.gender,
})

export function formatPerson(doc: PayloadPerson, parentDocs: PayloadPerson[] = []): Person {
  const spouse = (doc.spouse ?? []).filter(isPersonObject).map(toRelatedPerson)
  const childs = (doc.children ?? []).filter(isPersonObject).map(toRelatedPerson)

  return {
    id: String(doc.id),
    name: doc.name,
    gender: doc.gender,
    image: relImage(doc.image),
    startYear: doc.startYear ?? undefined,
    startBlurriness: doc.startBlurriness ?? undefined,
    endYear: doc.endYear ?? undefined,
    endBlurriness: doc.endBlurriness ?? undefined,
    age:
      doc.startYear != null && doc.endYear != null
        ? getTimePeriod(doc.startYear, doc.endYear)
        : undefined,
    stillActive: doc.stillActive ?? undefined,
    parents: parentDocs.map((p) => ({ id: String(p.id), gender: p.gender, name: p.name })),
    spouse: orderBy(spouse, ['name']),
    childs: orderBy(childs, ['name']),
    wolLink: doc.wolLink ?? undefined,
    richText: doc.content ?? undefined,
  }
}

export function formatTime(doc: PayloadTime): Time {
  return {
    id: String(doc.id),
    name: doc.name,
    image: relImage(doc.image),
    startYear: doc.startYear ?? undefined,
    endYear: doc.endYear ?? undefined,
    richText: doc.content ?? undefined,
    wolLink: doc.wolLink ?? undefined,
  }
}

// Accepts either a full event document (sidebar) or the field-narrowed document
// the timeline query returns (only id/name/year selected).
export function formatEvent(
  doc: Pick<PayloadEvent, 'id' | 'name' | 'year'> & Partial<PayloadEvent>,
): Event {
  // `2020` is the legacy sentinel for "present day".
  const year = doc.year === 2020 ? new Date().getFullYear() : doc.year

  return {
    id: String(doc.id),
    name: doc.name,
    image: relImage(doc.image),
    year,
    richText: doc.content ?? undefined,
    wolLink: doc.wolLink ?? undefined,
  }
}
