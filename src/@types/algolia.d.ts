import type { BaseHit } from 'instantsearch.js'

export interface AlgoliaPerson extends BaseHit {
  objectID: string
  name_en: string
  name_de: string
  imageUrl?: string
}

export interface AlgoliaTime extends BaseHit {
  objectID: string
  name_en: string
  name_de: string
  imageUrl?: string
}

export interface AlgoliaEvent extends BaseHit {
  objectID: string
  name_en: string
  name_de: string
  year: number
  imageUrl?: string
  wolLink_de?: string
  wolLink_en?: string
}

export type AlgoliaIndex = 'person' | 'time' | 'event'

export type AlgoliaHit<T> = T extends 'person'
  ? AlgoliaPerson
  : T extends 'time'
    ? AlgoliaTime
    : T extends 'event'
      ? AlgoliaEvent
      : never
