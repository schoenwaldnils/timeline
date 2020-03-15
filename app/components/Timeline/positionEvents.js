export default function positionTimes(events) {
  const occupiedSpace = [0]
  events.map(event => {
    const { pixelYear: start, name } = event

    const endWithMargin = start + name.length * 7 + 10

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

    event.top = top

    return event
  })

  return {
    eventsHeight: occupiedSpace.length,
    events,
  }
}
