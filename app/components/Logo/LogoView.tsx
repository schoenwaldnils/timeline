import React from 'react'
import styled from '@emotion/styled'

import { ReactComponent as Icon } from './icon.svg'
import { ReactComponent as Logo } from './logo.svg'

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

const StyledLogo = styled(Logo)<{ isDark: boolean }>`
  display: none;
  width: auto;
  color: ${({ isDark }) => (isDark ? '#fff' : '#000')};

  @media ${viewportsJs.sm} {
    display: block;
    font-size: 2.5rem;
  }
`

export const LogoView: React.FC<{ isDark?: boolean }> = ({
  isDark = false,
}) => {
  console.log({ isDark })
  return (
    <Wrapper>
      <StyledIcon />
      <StyledLogo isDark={isDark} width={null} />
    </Wrapper>
  )
}
