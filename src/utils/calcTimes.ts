import { YEARS_AFTER_ZERO, YEARS_BEFORE_ZERO } from '@/data/constants'

interface Props {
  startYear: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  stillActive?: boolean
  type?: 'person' | 'time'
}

export const calcTimes = ({
  startYear,
  endYear,
  stillActive,
  type,
}: Props):
  | {
      pixelStart: number
      pixelEnd: number
      duration: number
      pixelDuration: number
    }
  | {
      pixelStart: number
    }
  | null => {
  let correctedEndYear = endYear
  let pixelStart: number
  let pixelEnd: number

  if ((type === 'person' && stillActive) || (type === 'time' && (!endYear || endYear === 0))) {
    correctedEndYear = YEARS_AFTER_ZERO
  }

  if (!startYear) {
    return null
  }

  pixelStart = startYear + YEARS_BEFORE_ZERO

  if (startYear >= 0) {
    pixelStart -= 1
  }

  if (!correctedEndYear) {
    return {
      pixelStart,
    }
  }

  pixelEnd = correctedEndYear + YEARS_BEFORE_ZERO
  pixelEnd += 1

  if (correctedEndYear > 0) {
    pixelEnd -= 1
  }

  return {
    pixelStart,
    pixelEnd,
    duration: startYear - correctedEndYear,
    pixelDuration: pixelEnd - pixelStart,
  }
}

export function pixelToYear(pixel: number): number {
  const year = pixel - YEARS_BEFORE_ZERO

  if (year >= 0) {
    return year + 1
  }

  return year
}
