import React from 'react'
import styled from '@emotion/styled'

import { H1 } from '../Typography'
import { Search } from '../Search'
import { LangSwitch } from '../LangSwitch'
import { shades } from '../../js/colors'
import { zIndexes } from '../../data/constants'

const Wrapper = styled.div`
  position: relative;
  z-index: ${zIndexes.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  line-height: 1;
  background-color: #fff;
  box-shadow: 0 -1rem 0.75rem 1rem rgba(0, 0, 0, 0.25);
`

const StyledH1 = styled(H1)`
  margin-bottom: 0;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  color: ${shades.cb3};

  & > * + * {
    margin-left: 1.5rem;
  }
`

export const Header = () => {
  return (
    <Wrapper>
      <StyledH1>Timeline</StyledH1>
      <Nav>
        <Search />
        <LangSwitch />
      </Nav>
    </Wrapper>
  )
}
