import styled from '@emotion/styled'
import { FC } from 'react'

import { shades } from '../../data/colors'
import { Header } from './Header'

export default {
  title: 'Header',
}

const Wrapper = styled.div`
  height: 80vh;
  background-color: ${shades.cb4};
`

export const Basic: FC = () => (
  <Wrapper>
    <Header />
  </Wrapper>
)
