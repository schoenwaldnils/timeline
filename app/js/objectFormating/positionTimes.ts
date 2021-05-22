import { TimelineEvent } from '../../../@types/TimelineEvent'
import { Timespan } from '../../../@types/Timespan'

export function positionTimes(
  times: Timespan[],
  events: TimelineEvent[],
): {
  rows: number
  positionedTimes: Timespan[]
  positionedEvents: TimelineEvent[]
} {
  const occupiedSpace = [0]

  const items = [...events, ...times].sort(
    (a, b) => a.pixelStart - b.pixelStart,
  )

  const positionedItems = items.map((item) => {
    const start = item.pixelStart
    let end: number // placeholder

    if (item.type === 'person' || item.type === 'time') {
      const tempEnd = (item as Timespan).pixelEnd
      const isTooSmall = tempEnd - start < 30
      end = Math.floor(isTooSmall ? start + 50 : tempEnd + 10)
    }

    if (item.type === 'event') {
      end = Math.floor(start + item.name.length * 8 + 10)
    }

    const testRow = (row = 0) => {
      if (Number.isInteger(occupiedSpace[row])) {
        if (start >= occupiedSpace[row]) {
          occupiedSpace[row] = end
          return row
        }
        return testRow(row + 1)
      }
      occupiedSpace.push(end)
      return row
    }

    const rowIndex = testRow()

    return {
      ...item,
      rowIndex,
    }
  })

  return {
    rows: occupiedSpace.length,
    positionedTimes: positionedItems.filter(
      (i) => i.type === 'person' || i.type === 'time',
    ) as Timespan[],
    positionedEvents: positionedItems.filter(
      (i) => i.type === 'event',
    ) as TimelineEvent[],
  }
}
