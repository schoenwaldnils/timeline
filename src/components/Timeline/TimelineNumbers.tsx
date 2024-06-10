import { useCallback } from 'react'

import css from './Timeline.module.css'

interface TimelineNumbersProps {
  startYear: number
  endYear: number
  scale: number
}

export const TimelineNumbers = ({
  startYear,
  endYear,
  scale,
}: TimelineNumbersProps) => {
  const numberWidth = 100 // TODO: make adjustable

  const startIsNegative = startYear <= 0
  const endIsNegative = endYear <= 0

  const start = (startIsNegative ? startYear * -1 : startYear) * scale
  const startRemainder = start % numberWidth
  const startQuotient = Math.floor(start / numberWidth)

  const end = (endIsNegative ? endYear * -1 : endYear) * scale
  const endRemainder = end % numberWidth
  const endQuotient =
    Math.floor(end / numberWidth) - (endRemainder === 0 ? 1 : 0)

  const numbers = []

  for (let i = 0; i <= startQuotient; i += 1) {
    numbers.push((numberWidth / scale) * (startQuotient - i) * -1)
  }

  for (let i = 1; i <= endQuotient; i += 1) {
    numbers.push((numberWidth / scale) * i)
  }

  const smallerLastNumber = endRemainder !== 0
  const lastNumberWidth = smallerLastNumber ? endRemainder : 0

  const getWidth = useCallback(
    (number: number, key: number): number => {
      if (number === 0) {
        return numberWidth - 1
      }

      if (key === numbers.length - 1 && smallerLastNumber) {
        return lastNumberWidth
      }

      return numberWidth
    },
    [lastNumberWidth, numberWidth, numbers.length, smallerLastNumber],
  )

  return (
    <div
      className={css.Timeline_numbers}
      style={{
        paddingLeft: `${startRemainder}px`,
      }}
    >
      {numbers.map((number, key) => {
        const width = getWidth(number, key)
        const numberNotNull = number === 0 ? 1 : number

        return (
          <div
            className={css.Timeline_numberBlock}
            style={{
              width,
            }}
            key={`timelineNumber-${number}`}
          >
            <div className={css.Timeline_number}>{numberNotNull}</div>
          </div>
        )
      })}
    </div>
  )
}
