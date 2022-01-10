export type Timespan = {
  id: string
  type: 'person' | 'time'
  name?: string
  startYear?: number
  endYear?: number
  startBlurriness?: number
  endBlurriness?: number
  stillActive?: boolean
  duration?: number
  pixelStart?: number
  pixelEnd?: number
  pixelDuration?: number
  rowIndex?: number
}
