const { getTimePeriod } = require('./utils')
const { calcTimes } = require('./calcTimes')

function generateGradient({
  calcedStart,
  calcedStartCertain,
  calcedEndCertain,
  calcedEnd,
  duration,
}) {
  if (!calcedStartCertain && !calcedEndCertain) {
    return ''
  }

  let startPx = 0
  let endPx = startPx + duration

  let gradientStart = ''
  let gradientEnd = ''

  if (calcedStartCertain) {
    startPx = calcedStartCertain - calcedStart
    gradientStart = 'transparent 0px, '
  }

  if (calcedEndCertain) {
    endPx = calcedEndCertain - calcedStart
    gradientEnd = `transparent ${calcedEnd - calcedStart}px`
  }

  return `
  linear-gradient(
    to right,
    ${gradientStart}
    var(--Time-color)
    ${startPx}px,
    var(--Time-color)
    ${endPx}px,
    ${gradientEnd})`
}

module.exports = time => {
  const {
    typeName,
    startYear,
    startVagueness,
    endYear,
    endVagueness,
    stillActive,
  } = time

  const {
    calcedStart,
    calcedStartCertain,
    calcedEndCertain,
    calcedEnd,
    pixelStart,
    pixelEnd,
  } = calcTimes({
    startYear,
    startVagueness,
    endYear,
    endVagueness,
    stillActive,
  })
  const duration = getTimePeriod(
    calcedStart,
    calcedEnd || new Date().getFullYear(),
  )
  const background = generateGradient({
    calcedStart,
    calcedStartCertain,
    calcedEndCertain,
    calcedEnd,
    duration,
  })

  return {
    ...time,
    type: typeName.toLowerCase(),
    calcedStart,
    calcedEnd,
    pixelStart,
    pixelEnd,
    duration,
    background,
  }
}
