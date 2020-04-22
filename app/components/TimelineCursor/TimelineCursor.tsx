/** @jsx jsx */
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

import { pixelToYear } from '../../js/calcTimes'
import { ourTime } from '../../js/utils'
import { ContextScale } from '../ContextScale'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: var(--TimelineCursor-left);
  width: 1px;
  height: 100%;
  pointer-events: none;
  background-color: #00000080;

  ::after {
    content: var(--TimelineCursor-year);
    position: absolute;
    top: 1.5rem;
    left: 5px;
    color: #000;
    white-space: nowrap;
  }
`

interface TimelineCursorProps {
  pixelYear: number
}

export const TimelineCursor: React.FC<TimelineCursorProps> = ({
  pixelYear,
}) => {
  const { scale } = useContext(ContextScale)
  if (!pixelYear || pixelYear === 0) return null

  const properties = {
    '--TimelineCursor-left': `${pixelYear}px`,
    '--TimelineCursor-year': `'${ourTime(pixelToYear(pixelYear / scale))}'`,
  } as React.CSSProperties

  return <Wrapper style={properties} />
}
