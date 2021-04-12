import { Document } from '@contentful/rich-text-types'

import { Parent } from './Parent.d'

export type Person = {
  id: string
  name: string
  image?: string
  startYear?: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  duration?: number
  spouse?: Person[]
  fatherID?: string
  father?: Parent
  motherID?: string
  mother?: Parent
  childs?: Person[]
  richText?: Document
  wolLink: string
}
