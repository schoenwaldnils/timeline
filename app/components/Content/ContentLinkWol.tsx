import React from 'react'
import styled from '@emotion/styled'

import { A } from '../Typography'

const Wrapper = styled.div`
  margin-bottom: 1em;
`

interface ContentfulLinkProps {
  wolLink: string
}

export const LinkToWOL: React.FC<ContentfulLinkProps> = ({ wolLink }) => (
  <Wrapper>
    <A href={wolLink} target="_blank" rel="noopener noreferrer">
      WOL-link
    </A>
  </Wrapper>
)
