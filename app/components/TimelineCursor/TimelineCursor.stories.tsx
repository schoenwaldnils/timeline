import React from 'react'
import styled from '@emotion/styled'
import { useMousePosition } from '../../hooks/useMousePosition'

import { TimelineCursorView } from './TimelineCursorView'

export default {
  title: 'TimelineCursor',
  component: TimelineCursorView,
  parameters: {
    percy: { skip: true },
  },
}

const Wrapper = styled.div`
  width: 1500px;
  height: 400px;
  background-color: #ff000050;
`

export const Basic = () => {
  const { mousePosition, scrollRef } = useMousePosition()

  return (
    <Wrapper ref={scrollRef}>
      <TimelineCursorView pixelYear={mousePosition.xElement} scale={1} />
    </Wrapper>
  )
}
