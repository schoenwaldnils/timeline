import styled from '@emotion/styled'
import { FC } from 'react'

import { ScaleIndicator } from './ScaleIndicator'
import { Scaling } from './Scaling'

export default {
  title: 'Scaling',
  component: Scaling,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.5rem;
  }
`

export const Basic: FC = () => (
  <Container>
    <Scaling />
    <ScaleIndicator />
  </Container>
)
