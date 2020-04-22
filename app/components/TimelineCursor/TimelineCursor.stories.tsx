import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useMousePosition } from '../../customHooks/useMousePosition'

import { TimelineCursor } from './TimelineCursor'

export default {
  title: 'TimelineCursor',
}

const Wrapper = styled.div`
  width: 1500px;
  height: 400px;
  background-color: #ff000050;
`

export const Basic = () => {
  const localRef = useRef(null)
  const mousePosition = useMousePosition(localRef)

  return (
    <Wrapper ref={localRef}>
      <TimelineCursor pixelYear={mousePosition.xElement} />
    </Wrapper>
  )
}
