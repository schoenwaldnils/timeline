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

  const {
    endYear: newEndYear,
    pixelStart,
    pixelEnd,
    duration,
    pixelDuration,
  } = calcTimes({
    startYear,
    startBlurriness,
    endYear,
    endBlurriness,
    stillActive,
    type,
  })

  return {
    ...time,
    endYear: newEndYear,
    pixelStart,
    pixelEnd,
    duration,
    pixelDuration,
  }
}
