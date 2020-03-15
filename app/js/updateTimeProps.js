import { getTimePeriod } from './utils'
import { calcTimes } from './calcTimes'

export default time => {
  const {
    startYear,
    startBlurriness,
    endYear,
    endBlurriness,
    stillActive,
  } = time

  const { calcedStart, calcedEnd, pixelStart, pixelEnd } = calcTimes({
    startYear,
    startBlurriness,
    endYear,
    endBlurriness,
    stillActive,
  })
  const duration = getTimePeriod(
    calcedStart,
    calcedEnd || new Date().getFullYear(),
  )

  return {
    ...time,
    calcedStart,
    calcedEnd,
    pixelStart,
    pixelEnd,
    duration,
  }
}
