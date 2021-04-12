import { Timespan } from '../../../@types/Timespan'
import { calcTimes } from '../calcTimes'

export const updateTimeProps = (time: Timespan): Timespan => {
  const {
    startYear,
    startBlurriness,
    endYear,
    endBlurriness,
    stillActive,
    type,
  } = time

  const { pixelStart, pixelEnd, duration, pixelDuration } = calcTimes({
    startYear,
    startBlurriness,
    endYear,
    endBlurriness,
    stillActive,
    type,
  })

  return {
    ...time,
    type,
    pixelStart,
    pixelEnd,
    duration,
    pixelDuration,
  }
}
