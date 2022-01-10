export type TimelineEvent = {
  type: 'event'
  id: string
  name: string
  pixelStart: number
  rowIndex?: number
  zIndex?: number
}
