import type {
  Event as PayloadEvent,
  Person as PayloadPerson,
  Time as PayloadTime,
} from '@/payload-types'

import { AlgoliaIndex } from './algolia.d'
import type { Event } from './Event.d'
import type { Person } from './Person.d'
import type { Time } from './Time.d'

/** Raw Payload document for a given content type. */
export type Data<T extends AlgoliaIndex> = T extends 'person'
  ? PayloadPerson
  : T extends 'time'
    ? PayloadTime
    : T extends 'event'
      ? PayloadEvent
      : never

/** Frontend-formatted shape for a given content type. */
export type FormatedData<T extends AlgoliaIndex> = T extends 'person'
  ? Person
  : T extends 'time'
    ? Time
    : T extends 'event'
      ? Event
      : never
