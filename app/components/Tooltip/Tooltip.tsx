import React from 'react'
import styled from '@emotion/styled'

import { zIndexes } from '../../data/constants'

const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 7px);
  right: 0;
  z-index: ${zIndexes.tooltip};
  padding: 0.25rem;
  overflow: auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;
`

export const Tooltip: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>
