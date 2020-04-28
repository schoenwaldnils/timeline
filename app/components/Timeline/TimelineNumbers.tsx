import React from 'react'
import styled from '@emotion/styled'

interface WrapperProps {
  paddingLeft: number
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px`};
  color: var(--TimelineNumbers-color);
  pointer-events: none;
`

interface NumberProps {
  width: number
  number: number
}

const Number = styled.div<NumberProps>`
  flex-shrink: 0;
  width: ${({ width, number }) => `${number === 0 ? width - 1 : width}px`};
  font-family: monospace;
  font-size: 12px;
  border-left: 1px solid;

  &::before {
    content: ${({ number }) => `"${number === 0 ? 1 : number}"`};
    display: block;
    margin: 0.25em;
    white-space: nowrap;
  }
`

interface TimelineNumbersProps {
  startYear: number
  endYear: number
  scale: number
}

export const TimelineNumbers: React.FC<TimelineNumbersProps> = ({
  startYear,
  endYear,
  scale,
}) => {
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

  const smallerLastNumer = endRemainder !== 0
  const lastNumberWidth = smallerLastNumer && endRemainder

  const getWidth = (number, key) => {
    if (number === 0) return numberWidth - 1
    if (key === numbers.length - 1 && smallerLastNumer) return lastNumberWidth
    return numberWidth
  }

  return (
    <Wrapper paddingLeft={startRemainder}>
      {numbers.map((number, key) => (
        <Number
          key={`timelineNumber-${number}`}
          width={getWidth(number, key)}
          number={number === 0 ? 1 : number}
        />
      ))}
    </Wrapper>
  )
}
