import {
  SCALE_YEARS_BEFORE_ZERO,
  SCALE_YEARS_AFTER_ZERO,
} from '../data/defaults'

export function calcPoints(type, year, blurriness) {
  if (!blurriness) {
    return year
  }

  let point
  let certainPoint = year

  if (type === 'start') {
    point = year
    certainPoint = year + blurriness
  } else {
    certainPoint = year - blurriness
    point = year
  }

  return { point, certainPoint }
}

function maxEnd(value) {
  if (value > SCALE_YEARS_AFTER_ZERO) {
    return SCALE_YEARS_AFTER_ZERO
  }
  return value
}

export function calcTimes({
  startYear,
  startBlurriness,
  endYear,
  endBlurriness,
  stillActive,
}) {
  let correctedEndYear = endYear

  if (stillActive || !endYear) {
    correctedEndYear = SCALE_YEARS_AFTER_ZERO
  }

  const points = {
    calcedStart: startYear,
    calcedEnd: correctedEndYear,
  }

  if (startBlurriness) {
    const { point, certainPoint } = calcPoints(
      'start',
      startYear,
      startBlurriness,
    )
    points.calcedStart = point
    points.calcedStartCertain = certainPoint
  }

  if (endBlurriness) {
    const { point, certainPoint } = calcPoints(
      'end',
      correctedEndYear,
      endBlurriness,
    )
    points.calcedEnd = maxEnd(point)
    points.calcedEndCertain = maxEnd(certainPoint)
  }

  if (points.calcedStart) {
    points.pixelStart = points.calcedStart + SCALE_YEARS_BEFORE_ZERO
  }

  if (points.calcedEnd) {
    points.pixelEnd = points.calcedEnd + SCALE_YEARS_BEFORE_ZERO
  }

  return points
}

export function pixelToYear(pixel) {
  const year = pixel - SCALE_YEARS_BEFORE_ZERO
  return year
}
