import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../../js/colors'
import { zIndexes } from '../../data/constants'
import { ButtonPlain } from '../Button'

interface WrapperProps {
  pixelYear: number
  rowIndex?: number
  zIndex?: number
}

const Wrapper = styled(ButtonPlain)<WrapperProps>`
  position: relative;
  z-index: ${({ zIndex }) => zIndex + zIndexes.event};
  display: inline-flex;
  align-items: center;
  grid-area: events;
  width: fit-content;
  height: 2em;
  margin-top: calc(${({ rowIndex }) => rowIndex} * (2em + 4px));
  margin-left: ${({ pixelYear }) => pixelYear}px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  color: var(--Event-color);
  white-space: nowrap;
  cursor: pointer;
  background-color: var(--Event-backgroundColor);

  ::before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 0;
    display: block;
    width: 1px;
    height: 100vh;
    min-height: calc(100vh + 50vh);
    background-color: ${colors.red};
  }

  :hover,
  :focus {
    z-index: ${zIndexes.eventFocus};

    ::before {
      outline: 0;
    }
  }
`

export interface EventProps extends WrapperProps {
  pixelYear: number
  rowIndex?: number
  zIndex?: number
  changeContent: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const EventView: React.FC<EventProps> = ({
  pixelYear,
  rowIndex = 0,
  zIndex = zIndexes.event,
  changeContent,
  children,
}) => {
  return (
    <Wrapper
      pixelYear={pixelYear}
      rowIndex={rowIndex}
      zIndex={zIndex}
      onClick={changeContent}
    >
      {children}
    </Wrapper>
  )
}
