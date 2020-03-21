export function positionEvents(events) {
  const occupiedSpace = [0]

  return events.map(event => {
    const { pixelYear: start, name } = event

    const endWithMargin = start + name.length * 7 + 10

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
      ...event,
      rowIndex,
    }
  })
}
