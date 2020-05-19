import React from 'react'
import styled from '@emotion/styled'

import { zIndexes } from '../../data/constants'
import { generateGradient } from './generateGradient'
import { ButtonPlain } from '../Button'

const timeColors = {
  person: 'var(--Timespan-backgroundColor--person)',
  time: 'var(--Timespan-backgroundColor--time)',
}

const transparentColors = {
  person: 'var(--Timespan-backgroundColor--personT)',
  time: 'var(--Timespan-backgroundColor--timeT)',
}

interface WrapperProps {
  type: string
  pixelStart: number
  pixelDuration: number
  background?: string
  rowIndex: number
  isActive: boolean
}

const Wrapper = styled(ButtonPlain)<WrapperProps>`
  position: relative;
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

  ${({ isActive }) =>
    isActive &&
    `
    box-shadow: 0 0 0 1px #f00;
  `}
`

interface TimespanNameProps {
  children: string
}

const TimespanName = styled.div<TimespanNameProps>`
  position: sticky;
  left: 0.5em;
`

export interface TimespanViewProps extends WrapperProps {
  name: string
  startBlurriness?: Number
  endBlurriness?: Number
  changeContent: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const TimespanView: React.FC<TimespanViewProps> = ({
  type,
  name,
  startBlurriness,
  endBlurriness,
  pixelStart,
  pixelDuration,
  rowIndex,
  changeContent,
  isActive,
}) => {
  const background = generateGradient(
    startBlurriness,
    endBlurriness,
    timeColors[type],
    transparentColors[type],
  )
  return (
    <Wrapper
      type={type}
      background={background}
      pixelStart={pixelStart}
      pixelDuration={pixelDuration}
      tabIndex={0}
      isActive={isActive}
      rowIndex={rowIndex}
      onClick={changeContent}
    >
      <TimespanName>{name}</TimespanName>
    </Wrapper>
  )
}
