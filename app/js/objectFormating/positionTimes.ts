export function positionTimes(times) {
  const occupiedSpace = [0]
  const positionedTimes = times.map(time => {
    const { pixelStart: start, pixelEnd: end } = time

    const endWithMargin = end + 10

    let rowIndex = 0
    ;(function testRow(row = 0) {
      if (Number.isInteger(occupiedSpace[row])) {
        if (start >= occupiedSpace[row]) {
          occupiedSpace[row] = endWithMargin
          rowIndex = row
        } else {
          testRow(row + 1)
        }
      } else {
        occupiedSpace.push(endWithMargin)
        rowIndex = row
      }
    })()

    return {
      ...time,
      rowIndex,
    }
  })

  return positionedTimes
}
