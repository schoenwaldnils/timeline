import { calcTimes } from './calcTimes'

interface Props {
  id: string
  name: string
  year: number
  [key: string]: any
}

export const updateEventProps = (event: Props) => {
  const { pixelStart } = calcTimes({
    startYear: event.year,
  })

  return {
    ...event,
    pixelYear: pixelStart,
  }
}
