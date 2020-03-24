import React from 'react'
import styled from '@emotion/styled'

import { A } from '../Typography'
import { t } from '../../js/translate'
import { CONTENTFUL_SPACE_ID } from '../../data/constants'
import { shades } from '../../js/colors'

interface ContentfulLinkProps {
  id: string
}

const StyledA = styled(A)`
  color: ${shades.cb4};
`

export const ContentfulLink: React.FC<ContentfulLinkProps> = ({ id }) => (
  <StyledA
    href={`https://app.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries/${id}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {t('misc.contentfulEdit')}
  </StyledA>
)
