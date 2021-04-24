import styled from '@emotion/styled'
import { FC } from 'react'

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

export const Basic: FC = () => {
  return (
    <Wrapper>
      <TimelineCursorView pixelYear={100} scale={1} />
    </Wrapper>
  )
}
