import styled from '@emotion/styled'
import { FC } from 'react'

import { viewportsJs } from '@/utils/viewports'

import { ReactComponent as IconSvg } from './icon.svg'
import { ReactComponent as LogoSvg } from './logo.svg'

const Wrapper = styled.div`
  flex-shrink: 0;
`

const StyledIcon = styled(IconSvg)`
  font-size: 2rem;
  color: #000;

  @media ${viewportsJs.sm} {
    display: none;
  }
`

const StyledLogo = styled(LogoSvg)<{ color: string }>`
  display: none;
  width: auto;
  color: ${({ color }) => color};

  @media ${viewportsJs.sm} {
    display: block;
    font-size: 2.5rem;
  }
`

import { useStore } from '@/hooks/useStore'

export const Logo = () => {
  const themeIsDark = useStore((state) => state.theme === 'dark')

  return (
    <Wrapper>
      <StyledIcon />
      <StyledLogo color={themeIsDark ? '#fff' : '#000'} width={undefined} />
    </Wrapper>
  )
}
