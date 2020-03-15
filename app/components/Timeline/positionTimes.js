export default function positionTimes(times) {
  const occupiedSpace = [0]
  times.map(time => {
    const { pixelStart: start, pixelEnd: end } = time

    const endWithMargin = end + 10

    let top = 0

    ;(function testRow(row = 0) {
      if (Number.isInteger(occupiedSpace[row])) {
        if (start >= occupiedSpace[row]) {
          occupiedSpace[row] = endWithMargin
          top = row
        } else {
          testRow(row + 1)
        }
      } else {
        occupiedSpace.push(endWithMargin)
        top = row
      }
    })()

    time.top = top

    return time
  })

  return {
    timesHeight: occupiedSpace.length,
    times,
  }
}
