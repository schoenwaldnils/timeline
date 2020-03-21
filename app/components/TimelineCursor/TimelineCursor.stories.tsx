import React from 'react'
import styled from '@emotion/styled'
import useMousePosition from '@react-hook/mouse-position'

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
  const [mousePosition, ref] = useMousePosition()

  return (
    <Wrapper ref={ref}>
      <TimelineCursor
        pixelYear={mousePosition.x}
        year={mousePosition.clientX}
      />
    </Wrapper>
  )
}
