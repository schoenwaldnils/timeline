import React from 'react'
import styled from '@emotion/styled'

import { Loading, LoadingDots } from './Loading'

export default {
  title: 'Loading',
  parameters: {
    percy: { skip: true },
  },
}

const Container = styled.div`
  padding: 2rem;
`

export const Basic = () => {
  return (
    <>
      <Container>
        <Loading />
      </Container>
      <Container>
        <LoadingDots />
      </Container>
    </>
  )
}
