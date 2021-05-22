import styled from '@emotion/styled'
import { FC, MouseEvent } from 'react'

import { colors } from '../../data/colors'
import { zIndexes } from '../../data/constants'
import { ButtonPlain } from '../Button'

interface WrapperProps {
  pixelStart: number
  rowIndex?: number
  zIndex?: number
}

const EventWrapper = styled(ButtonPlain)<WrapperProps>`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex + zIndexes.event};
  display: inline-flex;
  align-items: center;
  grid-area: events;
  width: fit-content;
  height: 2em;
  margin-top: calc(${({ rowIndex }) => rowIndex} * (2em + 4px));
  margin-left: ${({ pixelStart }) => pixelStart}px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  color: var(--Event-color);
  white-space: nowrap;
  cursor: pointer;
  background-color: var(--Event-backgroundColor);

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
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
  pixelStart: number
  rowIndex?: number
  zIndex?: number
  changeContent: (event: MouseEvent) => void
}

export const EventView: FC<EventProps> = ({
  pixelStart,
  rowIndex = 0,
  zIndex = zIndexes.event,
  changeContent,
  children,
}) => {
  return (
    <EventWrapper
      pixelStart={pixelStart}
      rowIndex={rowIndex}
      zIndex={zIndex}
      onClick={changeContent}
    >
      {children}
    </EventWrapper>
  )
}
