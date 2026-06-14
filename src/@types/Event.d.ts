import type { RichTextContent } from './RichText.d'

export interface Event {
  id: string
  year: number
  name: string
  image?: {
    src: string
    width: number
    height: number
  }
  richText?: RichTextContent
  wolLink?: string
}
