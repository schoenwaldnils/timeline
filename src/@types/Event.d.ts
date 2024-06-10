export interface Event {
  id: string
  year: number
  name: string
  image?: {
    src: string
    width: number
    height: number
  }
  richText?: json
  wolLink?: string
}
