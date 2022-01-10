import styled from '@emotion/styled'
import { FC } from 'react'

import { Loading as LoadingComponent, LoadingDots } from './Loading'

export default {
  title: 'Loading',
  component: LoadingComponent,
  parameters: {
    percy: { skip: true },
  },
}

const Container = styled.div`
  padding: 2rem;
`

export const Loading: FC = () => {
  return (
    <>
      <Container>
        <LoadingComponent />
      </Container>
      <Container>
        <LoadingDots />
      </Container>
    </>
  )
}
