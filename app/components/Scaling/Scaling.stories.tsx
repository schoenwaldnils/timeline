import React from 'react'
import styled from '@emotion/styled'

import { Scaling } from './Scaling'
import { ScaleIndicator } from './ScaleIndicator'

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

export const Basic = () => (
  <Container>
    <Scaling />
    <ScaleIndicator />
  </Container>
)
