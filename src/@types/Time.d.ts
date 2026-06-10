import type { RichTextContent } from './RichText.d'

export type Time = {
  id: string
  name?: string
  startYear?: number
  endYear?: number
  duration?: number
  richText?: RichTextContent
  image?: {
    src: string
    width: number
    height: number
  }
  wolLink?: string
}
