import { ReactNode } from 'react'

import { Loading as LoadingComponent, LoadingDots } from './Loading'

export default {
  title: 'Loading',
  component: LoadingComponent,
  parameters: {
    percy: { skip: true },
  },
}

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ padding: '2rem' }}>{children}</div>
)

export const Loading = () => {
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
