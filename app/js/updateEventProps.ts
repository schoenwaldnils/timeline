import { calcTimes } from './calcTimes'

interface Props {
  year: number
  [key: string]: any
  title: string
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
