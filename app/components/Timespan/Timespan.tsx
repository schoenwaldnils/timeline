import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../../js/colors'
import { generateGradient } from './generateGradient'

const timeColors = {
  person: colors.green,
  time: colors.yellow,
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ duration }) => duration}px;
  height: 2em;
  margin-bottom: 1px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  font-size: 10px;
  color: #000;
  background: ${({ background }) => background};
  white-space: nowrap;
  cursor: pointer;
`

const TimespanName: React.FC<{ name: string }> = styled.div`
  position: sticky;
  left: 0.5em;
`

type Props = {
  id: string
  name: string
  type: 'time' | 'person'
  duration: Number
  isActive?: Boolean
  startYear: Number
  startBlurriness: Number
  endYear: Number
  endBlurriness: Number
}

export const Timespan: React.FC<Props> = ({
  type,
  isActive,
  name,
  duration,
  startYear,
  startBlurriness,
  endYear,
  endBlurriness,
}) => {
  if (!duration) return null

  const background = generateGradient(
    startBlurriness,
    endBlurriness,
    timeColors[type],
  )

  return (
    <Wrapper
      type={type}
      background={background}
      duration={duration}
      isActive={isActive}
      role="button"
      tabIndex={0}
    >
      <TimespanName>{name}</TimespanName>
    </Wrapper>
  )
}

Timespan.defaultProps = {
  isActive: false,
}

// const StyledTimespan = styled(Timespan)(
//   ({ calcedStart, top = 0, duration, background }) => ({
//     width: `${duration}px`,
//     top: `calc(${top} * (2em + 1px))`,
//     left: `${calcedStart + SCALE_YEARS_BEFORE_ZERO}px`,
//     background,
//   }),
// )
