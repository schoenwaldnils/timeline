import { Document } from '@contentful/rich-text-types'

export type Time = {
  id: string
  name?: string
  startYear?: number
  endYear?: number
  duration?: number
  richText?: Document
  image?: {
    src: string
    width: number
    height: number
  }
  wolLink?: string
}
