import { TimelineEvent } from '@/@types/TimelineEvent'

export function positionEvents(events: TimelineEvent[]): TimelineEvent[] {
  const occupiedSpace = [0]

  return events.map((event) => {
    const { pixelStart, name } = event
    const start = pixelStart

    const endWithMargin = Math.floor(start + name.length * 8 + 10)

    const testRow = (row = 0) => {
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
      ...event,
      rowIndex,
    }
  })
}
