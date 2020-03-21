import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { SidebarContext } from '../Sidebar/SidebarContext'

import { colors } from '../../js/colors'
import { generateGradient } from './generateGradient'
import { zIndexes } from '../../data/constants'

const timeColors = {
  person: colors.green,
  time: colors.yellow,
}

interface WrapperProps {
  type: string
  isActive?: Boolean
  pixelStart: number
  pixelDuration: number
  background?: string
  rowIndex: number
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  z-index: ${zIndexes.timespan};
  display: flex;
  align-items: center;
  grid-area: times;
  width: ${({ pixelDuration }) => pixelDuration}px;
  height: 2em;
  margin-top: calc(${({ rowIndex }) => rowIndex} * (2em + 2px));
  margin-bottom: 1px;
  margin-left: ${({ pixelStart }) => pixelStart}px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  font-size: 10px;
  color: #000;
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

export interface TimespanProps extends WrapperProps {
  id: string
  name: string
  startBlurriness?: Number
  endBlurriness?: Number
}

export const Timespan: React.FC<TimespanProps> = ({
  id,
  type,
  isActive,
  name,
  pixelStart,
  pixelDuration,
  startBlurriness,
  endBlurriness,
  rowIndex,
}) => {
  const { changeContent } = useContext(SidebarContext)

  const background = generateGradient(
    startBlurriness,
    endBlurriness,
    timeColors[type],
  )

  return (
    <Wrapper
      type={type}
      background={background}
      pixelStart={pixelStart}
      pixelDuration={pixelDuration}
      isActive={isActive}
      role="button"
      rowIndex={rowIndex}
      tabIndex={0}
      onKeyUp={e => e.keyCode === 13 && changeContent(id)}
      onClick={() => changeContent(id)}
    >
      <TimespanName>{name}</TimespanName>
    </Wrapper>
  )
}

Timespan.defaultProps = {
  isActive: false,
}
