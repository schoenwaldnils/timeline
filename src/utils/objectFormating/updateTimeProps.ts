import { Timespan } from '@/@types/Timespan'

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

  const calcedTimes = calcTimes({
    startYear,
    startBlurriness,
    endYear,
    endBlurriness,
    stillActive,
    type,
  })

  if (!calcedTimes) {
    return time
  }

  return {
    ...time,
    ...calcedTimes,
  }
}
