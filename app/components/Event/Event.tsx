import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { SidebarContext } from '../Sidebar/SidebarContext'

import { colors } from '../../js/colors'
import { zIndexes } from '../../data/constants'

interface WrapperProps {
  pixelYear: number
  rowIndex?: number
  zIndex?: number
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  z-index: ${({ zIndex }) => zIndex + zIndexes.event};
  display: inline-flex;
  align-items: center;
  grid-area: events;
  width: fit-content;
  height: 2em;
  margin-top: calc(${({ rowIndex }) => rowIndex} * (2em + 2px));
  margin-left: ${({ pixelYear }) => pixelYear}px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  font-family: monospace;
  color: #fff;
  white-space: nowrap;
  cursor: pointer;
  background-color: #555;

  ::before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 0;
    display: block;
    width: 1px;
    height: 100vh;
    min-height: calc(100% + 20vh);
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
  id: string
  name: string
}

export const Event: React.FC<EventProps> = ({
  id,
  name,
  pixelYear,
  rowIndex = 0,
  zIndex = zIndexes.event,
}) => {
  const { changeContent } = useContext(SidebarContext)
  return (
    <Wrapper
      id={id}
      // tabIndex={tabIndex}
      role="button"
      tabIndex={0}
      pixelYear={pixelYear}
      rowIndex={rowIndex}
      zIndex={zIndex}
      onKeyUp={e => e.keyCode === 13 && changeContent(id)}
      onClick={() => changeContent(id)}
    >
      {name}
    </Wrapper>
  )
}

Event.defaultProps = {
  rowIndex: 0,
}
