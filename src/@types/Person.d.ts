import { Document } from '@contentful/rich-text-types'

import { Child } from './Child.d'
import { Parent } from './Parent.d'

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
  spouse?: Person[]
  stillActive?: boolean
  parents?: Parent[]
  childs?: Child[]
  richText?: Document
  wolLink?: string
}
