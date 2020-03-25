import { calcTimes } from './calcTimes'

export const updateTimeProps = time => {
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
    pixelStart,
    pixelEnd,
    duration,
    pixelDuration,
  }
}
