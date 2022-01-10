import { Document } from '@contentful/rich-text-types'

import { Parent } from './Parent.d'

export type Person = {
  id: string
  name: string
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
  spouse?: Person[]
  fatherID?: string
  father?: Parent
  motherID?: string
  mother?: Parent
  childs?: Person[]
  richText?: Document
  wolLink: string
}
