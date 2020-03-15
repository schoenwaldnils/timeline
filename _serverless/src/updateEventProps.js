const { SCALE_YEARS_BEFORE_ZERO } = require('./data/defaults')

module.exports = event => {
  const { typeName, year } = event

  return {
    ...event,
    type: typeName.toLowerCase(),
    pixelYear: year + SCALE_YEARS_BEFORE_ZERO + 1, // +1px to make place for the red line
  }
}
