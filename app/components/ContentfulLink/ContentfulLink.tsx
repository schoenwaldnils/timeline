import React from 'react'
import styled from '@emotion/styled'

import { A } from '../Typography'
import { CONTENTFUL_SPACE_ID } from '../../data/constants'
import { shades } from '../../js/colors'
import { useTranslation } from '../../hooks/useTranslation'

interface ContentfulLinkProps {
  id: string
}

const StyledA = styled(A)`
  color: ${shades.cb4};
`

export const ContentfulLink: React.FC<ContentfulLinkProps> = ({ id }) => {
  const { t } = useTranslation()

  return (
    <StyledA
      href={`https://app.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('misc.contentfulEdit')}
    </StyledA>
  )
}
