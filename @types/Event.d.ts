export type Event = {
  id: string
  name: string
  year: number
  image?: {
    src: string
    width: number
    height: number
  }
  wolLink?: string
  pixelStart?: number
  rowIndex?: number
}
