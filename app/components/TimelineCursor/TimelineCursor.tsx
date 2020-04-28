/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

import { pixelToYear } from '../../js/calcTimes'
import { ourTime } from '../../js/utils'
import { useStore } from '../Store'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: var(--TimelineCursor-left);
  width: 1px;
  height: 100%;
  pointer-events: none;
  background-color: var(--TimelineCursor-color);

  ::after {
    content: var(--TimelineCursor-year);
    position: absolute;
    top: 1.5rem;
    left: 5px;
    color: var(--TimelineCursor-color);
    white-space: nowrap;
  }
`

interface TimelineCursorProps {
  pixelYear: number
}

export const TimelineCursor: React.FC<TimelineCursorProps> = ({
  pixelYear,
}) => {
  const [state] = useStore()
  if (!pixelYear || pixelYear === 0) return null

  const properties = {
    '--TimelineCursor-left': `${pixelYear}px`,
    '--TimelineCursor-year': `'${ourTime(
      pixelToYear(pixelYear / state.scale),
    )}'`,
  } as React.CSSProperties

  return <Wrapper style={properties} />
}
