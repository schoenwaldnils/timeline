import styled from '@emotion/styled'
import { FC } from 'react'

import { LogoView } from './LogoView'

export default {
  title: 'Logo',
  component: LogoView,
  parameters: {
    percy: { widths: [320, 1024] },
  },
}

const Container = styled.div`
  padding: 3rem;
`

export const Logo: FC = () => {
  return (
    <>
      <Container>
        <LogoView />
      </Container>
      <Container style={{ backgroundColor: '#000' }}>
        <LogoView isDark={true} />
      </Container>
    </>
  )
}
