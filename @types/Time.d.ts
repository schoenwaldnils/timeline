import { Document } from '@contentful/rich-text-types'

export type Time = {
  id: string
  name?: string
  startYear?: number
  endYear?: number
  duration?: number
  richText?: Document
  image?: string
  wolLink?: string
}
