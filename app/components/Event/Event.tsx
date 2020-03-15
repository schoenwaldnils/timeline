import React from 'react'
import styled from '@emotion/styled'

import { ourTime } from '../../js/utils'
import { colors } from '../../js/colors'
import { SCALE_YEARS_BEFORE_ZERO } from '../../data/defaults'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${({ year }) => year + SCALE_YEARS_BEFORE_ZERO + 1}px;
  z-index: 0;
  display: block;
  padding: 0.25em 0.5em 0.65em;
  font-family: monospace;
  color: #fff;
  white-space: nowrap;
  cursor: pointer;
  background-color: #555;

  :hover,
  :focus {
    z-index: 1;
    outline: 1px solid #fff;
  }

  ::before {
    content: '';
    position: absolute;
    right: 100%;
    top: -20vh;
    z-index: 0;
    display: block;
    width: 1px;
    height: 120vh;
    background-color: ${colors.red};
  }
`

interface Props {
  id: string
  // tabIndex: number
  name: string
  year: number
  handleElementClick: MouseEvent<HTMLDivElement, MouseEvent>
}

export const Event: React.FC<Props> = ({
  id,
  // tabIndex,
  name,
  year,
  handleElementClick,
}) => {
  return (
    <Wrapper
      id={id}
      // tabIndex={tabIndex}
      role="button"
      year={year}
      onKeyUp={e => e.keyCode === 13 && handleElementClick}
      onClick={handleElementClick}
    >
      {name}
    </Wrapper>
  )
}
