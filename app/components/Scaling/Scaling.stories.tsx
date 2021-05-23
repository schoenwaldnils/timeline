import styled from '@emotion/styled'
import { FC } from 'react'

import { ScaleIndicator } from './ScaleIndicator'
import { Scaling as ScalingComponent } from './Scaling'

export default {
  title: 'Scaling',
  component: ScalingComponent,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.5rem;
  }
`

export const Scaling: FC = () => (
  <Container>
    <ScalingComponent />
    <ScaleIndicator />
  </Container>
)
