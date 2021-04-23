import styled from '@emotion/styled'
import { FC } from 'react'

import { zIndexes } from '../../data/constants'

const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 7px);
  left: 0;
  z-index: ${zIndexes.tooltip};
  padding: 0.25rem;
  overflow: auto;
  background-color: var(--Tooltip-backgroundColor);
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;
`

export const Tooltip: FC = (props) => <Wrapper {...props} />
