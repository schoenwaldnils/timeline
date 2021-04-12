import styled from '@emotion/styled'
import { CSSProperties, FC } from 'react'

import { pixelToYear } from '../../js/calcTimes'
import { OurTime } from '../OurTime'

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

interface TimelineCursorViewProps {
  pixelYear: number
  scale: number
}

export const TimelineCursorView: FC<TimelineCursorViewProps> = ({
  pixelYear,
  scale,
}) => {
  const properties = {
    '--TimelineCursor-left': `${pixelYear}px`,
    '--TimelineCursor-year': `'${OurTime(
      Math.floor(pixelToYear(pixelYear / scale)),
    )}'`,
  } as CSSProperties

  return <Wrapper style={properties} />
}
