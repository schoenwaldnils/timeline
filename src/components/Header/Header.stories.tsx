import styled from '@emotion/styled'
import { FC } from 'react'

import { shades } from '@/data/colors'

import { Header as HeaderComponent } from './Header'

export default {
  title: 'Header',
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

const Wrapper = styled.div`
  height: 80vh;
  background-color: ${shades.cb4};
`

export const Header: FC = () => (
  <Wrapper>
    <HeaderComponent />
  </Wrapper>
)
