import { AlgoliaIndex } from './algolia.d'
import type { Event } from './Event.d'
import type { CEvent, CPerson, CTime } from './generated/contentful.d'
import type { Person } from './Person.d'
import type { Time } from './Time.d'

export type Data<T extends AlgoliaIndex> = T extends 'person'
  ? CPerson
  : T extends 'time'
  ? CTime
  : T extends 'event'
  ? CEvent
  : never

export type FormatedData<T extends AlgoliaIndex> = T extends 'person'
  ? Person
  : T extends 'time'
  ? Time
  : T extends 'event'
  ? Event
  : never
