import React from 'react'

import styled from '@emotion/styled'
import { Header } from './Header'
import { shades } from '../../data/colors'

export default {
  title: 'Header',
}

const Wrapper = styled.div`
  height: 80vh;
  background-color: ${shades.cb4};
`

export const Basic = () => (
  <Wrapper>
    <Header />
  </Wrapper>
)
