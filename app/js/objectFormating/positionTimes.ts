export function positionTimes(times) {
  const occupiedSpace = [0]
  const positionedTimes = times.map(time => {
    const { pixelStart: start, pixelEnd: end } = time

    const isTooSmall = end - start < 30
    const endWithMargin = Math.floor(isTooSmall ? start + 50 : end + 10)

    function testRow(row = 0) {
      if (Number.isInteger(occupiedSpace[row])) {
        if (start >= occupiedSpace[row]) {
          occupiedSpace[row] = endWithMargin
          return row
        }
        return testRow(row + 1)
      }
      occupiedSpace.push(endWithMargin)
      return row
    }

    const rowIndex = testRow()

    return {
      ...time,
      rowIndex,
    }
  })

  return positionedTimes
}
