import styled from '@emotion/styled'
import { FC } from 'react'

import { Filter } from '@/components/Filter'
import { LangSwitch } from '@/components/LangSwitch'
import { Logo } from '@/components/Logo'
import { Search } from '@/components/Search'
import { zIndexes } from '@/data/constants'
import { viewportsJs } from '@/js/viewports'

const HeaderWrapper = styled.div`
  position: relative;
  z-index: ${zIndexes.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  padding: 0.5rem;
  line-height: 1;
  color: var(--Header-color);
  background-color: var(--Header-backgroundColor);
  box-shadow: 0 -1rem 0.75rem 1rem rgba(0, 0, 0, 0.25);

  @media ${viewportsJs.sm} {
    padding: 0.5rem 1rem;
  }
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  & > * + * {
    margin-left: 0.75rem;

    @media ${viewportsJs.sm} {
      margin-left: 1.5rem;
    }
  }
`

export const Header: FC = () => (
  <HeaderWrapper>
    <Logo />
    <Nav>
      <Search />
      <Filter />
      <LangSwitch />
    </Nav>
  </HeaderWrapper>
)
