import { time } from '../data/constants'

const { YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO } = time

// function maxEnd(value) {
//   if (value > YEARS_AFTER_ZERO) {
//     return YEARS_AFTER_ZERO
//   }
//   return value
// }

interface Props {
  startYear: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  stillActive?: boolean
  type?: 'person' | 'time'
}

export const calcTimes = ({ startYear, endYear, stillActive, type }: Props) => {
  let correctedEndYear = endYear
  let pixelStart: number
  let pixelEnd: number

  if ((type === 'person' && stillActive) || (type === 'time' && !endYear)) {
    correctedEndYear = YEARS_AFTER_ZERO
  }

  if (startYear) {
    pixelStart = startYear + YEARS_BEFORE_ZERO
    if (startYear + YEARS_BEFORE_ZERO >= 0) {
      pixelStart -= 1
    }
  }

  if (correctedEndYear) {
    pixelEnd = correctedEndYear + YEARS_BEFORE_ZERO
    if (correctedEndYear + YEARS_BEFORE_ZERO >= 0) {
      pixelEnd -= 1
    }
  }

  return {
    pixelStart,
    pixelEnd,
    duration: endYear ? pixelEnd - pixelStart : null,
    pixelDuration: pixelEnd - pixelStart,
  }
}

export function pixelToYear(pixel: number) {
  const year = pixel - YEARS_BEFORE_ZERO
  return year
}
