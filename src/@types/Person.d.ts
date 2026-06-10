import type { Child } from './Child.d'
import type { Parent } from './Parent.d'
import type { RichTextContent } from './RichText.d'

export type RelatedPerson = {
  id: string
  name: string
  gender: string
}

export type Person = {
  id: string
  name: string
  gender: string
  image?: {
    src: string
    width: number
    height: number
  }
  startYear?: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  age?: number
  spouse?: RelatedPerson[]
  stillActive?: boolean
  parents?: Parent[]
  childs?: Child[]
  richText?: RichTextContent
  wolLink?: string
}
