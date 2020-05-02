import React from 'react'
import styled from '@emotion/styled'

import { LogoView } from './LogoView'

export default {
  title: 'Logo',
  component: LogoView,
}

const Container = styled.div`
  padding: 3rem;
`

export const Basic = () => {
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

export const Dark = () => <LogoView isDark={true} />
