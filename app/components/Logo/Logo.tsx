import React from 'react'
import styled from '@emotion/styled'

import Icon from './Icon'
import { H1 } from '../Typography'

import { viewportsJs } from '../../js/viewports'

const Wrapper = styled.div`
  flex-shrink: 0;
`

const StyledIcon = styled(Icon)`
  font-size: 2rem;

  @media ${viewportsJs.sm} {
    display: none;
  }
`

const StyledH1 = styled(H1)`
  display: none;
  margin-bottom: 0;

  @media ${viewportsJs.sm} {
    display: block;
  }
`

export const Logo = () => {
  return (
    <Wrapper>
      <StyledIcon />
      <StyledH1>Timeline</StyledH1>
    </Wrapper>
  )
}
