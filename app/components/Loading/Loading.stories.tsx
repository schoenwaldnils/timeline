import styled from '@emotion/styled'
import { FC } from 'react'

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

export const Basic: FC = () => {
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
