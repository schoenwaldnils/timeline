import React from 'react'
import styled from '@emotion/styled'

import { ReactComponent as LogoIcon } from './icon.svg'
import { ReactComponent as LogoFull } from './logo.svg'

import { viewportsJs } from '../../js/viewports'

const Wrapper = styled.div`
  flex-shrink: 0;
`

const StyledIcon = styled(LogoIcon)`
  font-size: 2rem;

  @media ${viewportsJs.sm} {
    display: none;
  }
`

const StyledLogo = styled(LogoFull)`
  display: none;

  @media ${viewportsJs.sm} {
    display: block;
    width: auto;
    font-size: 2.5rem;
  }
`

export const Logo = () => {
  return (
    <Wrapper>
      <StyledIcon />
      <StyledLogo width={null} />
    </Wrapper>
  )
}
