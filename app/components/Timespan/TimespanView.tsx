import styled from '@emotion/styled'
import { FC, MouseEvent } from 'react'

import { Timespan as TimespanType } from '../../../@types/Timespan'
import { zIndexes } from '../../data/constants'
import { ButtonPlain } from '../Button'
import { generateGradient } from './generateGradient'

const timeColors = {
  person: 'var(--Timespan-backgroundColor--person)',
  time: 'var(--Timespan-backgroundColor--time)',
}

const transparentColors = {
  person: 'var(--Timespan-backgroundColor--personT)',
  time: 'var(--Timespan-backgroundColor--timeT)',
}

interface WrapperProps {
  pixelStart: number
  pixelDuration: number
  background?: string
  rowIndex: number
}

const TimespanWrapper = styled(ButtonPlain)<WrapperProps>`
  position: absolute;
  z-index: ${zIndexes.timespan};
  display: flex;
  align-items: center;
  grid-area: times;
  width: ${({ pixelDuration }) => pixelDuration}px;
  height: 2em;
  margin-top: calc(${({ rowIndex }) => rowIndex} * (2em + 4px));
  margin-bottom: 1px;
  margin-left: ${({ pixelStart }) => pixelStart}px;
  padding: 0 0.5em;
  color: var(--Timespan-color);
  white-space: nowrap;
  cursor: pointer;
  background: ${({ background }) => background};
`

interface TimespanNameProps {
  children: string
}

const TimespanName = styled.div<TimespanNameProps>`
  position: sticky;
  left: 0.5em;
`

export type TimespanViewProps = TimespanType & {
  changeContent: (event: MouseEvent<HTMLButtonElement>) => void
}

export const TimespanView: FC<TimespanViewProps> = ({
  type,
  name,
  startBlurriness,
  endBlurriness,
  pixelStart,
  pixelDuration,
  rowIndex,
  changeContent,
}) => {
  const background = generateGradient(
    startBlurriness,
    endBlurriness,
    timeColors[type],
    transparentColors[type],
  )

  return (
    <TimespanWrapper
      background={background}
      pixelStart={pixelStart}
      pixelDuration={pixelDuration}
      tabIndex={0}
      rowIndex={rowIndex}
      onClick={changeContent}
    >
      <TimespanName>{name}</TimespanName>
    </TimespanWrapper>
  )
}
