import React from 'react'
import styled from '@emotion/styled'

import { ReactComponent as Icon } from './icon.svg'
import { ReactComponent as LogoDark } from './logo.svg'
import { ReactComponent as LogoLight } from './logo-white.svg'

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

export const LogoView: React.FC<{ isDark?: boolean }> = ({
  isDark = false,
}) => {
  const LogoSvg = isDark ? LogoLight : LogoDark

  const StyledLogo = styled(LogoSvg)`
    display: none;

    @media ${viewportsJs.sm} {
      display: block;
      width: auto;
      font-size: 2.5rem;
    }
  `

  return (
    <Wrapper>
      <StyledIcon />
      <StyledLogo width={null} />
    </Wrapper>
  )
}
