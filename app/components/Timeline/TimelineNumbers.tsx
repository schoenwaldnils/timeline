import React from 'react'
import styled from '@emotion/styled'

import { shades } from '../../js/colors'

interface WrapperProps {
  width: number
  startYear: number
  endYear: number
  scale: number
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => `${width}px`};
  height: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    background-size: ${({ scale }) => `${scale * 100}px`};
  }

  &::before {
    left: 0;
    width: ${({ scale, startYear }) => `${scale * startYear}px`};
    background-image: linear-gradient(
      to left,
      transparent calc(100% - 1px),
      ${shades.cb3} calc(100% - 1px)
    );
    background-position-x: right;
  }

  &::after {
    left: ${({ scale, startYear }) => `${scale * startYear}px`};
    width: ${({ scale, endYear }) => `${scale * endYear + 1}px`};
    background-image: linear-gradient(
      to right,
      ${shades.cb3} 1px,
      transparent 1px
    );
    background-position-x: 0;
  }
`

const Numbers = styled.div`
  position: sticky;
  top: 0.25em;
  display: flex;
  padding-right: 17px;
  padding-left: 5px;
`

const NumbersBlock = styled.div`
  display: flex;
`

interface NumberProps {
  scale?: number
}

const Number = styled.div<NumberProps>`
  width: ${({ scale }) => `${scale * 100}px`};
  padding-left: 0;
  font-family: monospace;
  font-size: 12px;
  color: ${shades.cb2};

  [data-type='positive'] > &:first-of-type {
    width: ${({ scale }) => `${scale * 100 - 1}px`};
  }
`

export const TimelineNumbers: React.FC<WrapperProps> = ({
  width,
  startYear,
  endYear,
  scale,
}) => {
  const scaleNumberNegativ = []
  for (let i = 0; i <= startYear / 100; i += 1) {
    scaleNumberNegativ.push(
      <Number scale={scale} key={`pos${i}`}>
        {i * -100}
      </Number>,
    )
  }

  const scaleNumberPositive = []
  for (let i = 1; i <= endYear / 100; i += 1) {
    scaleNumberPositive.push(
      <Number scale={scale} key={`neg${i}`}>
        {i * 100}
      </Number>,
    )
  }
  return (
    <Wrapper
      width={width}
      startYear={startYear}
      endYear={endYear}
      scale={scale}
    >
      <Numbers>
        <NumbersBlock>{scaleNumberNegativ.reverse()}</NumbersBlock>
        <NumbersBlock data-type="positive">{scaleNumberPositive}</NumbersBlock>
      </Numbers>
    </Wrapper>
  )
}
