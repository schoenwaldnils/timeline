import React from 'react'
import styled from '@emotion/styled'

import { A } from '../Typography'
import { CONTENTFUL_SPACE_ID } from '../../data/constants'
import { shades } from '../../data/colors'
import { useTranslation } from '../../hooks/useTranslation'
import { useUser } from '../../hooks/useUser'

interface ContentfulLinkProps {
  id: string
}

const StyledA = styled(A)`
  color: ${shades.cb4};
`

export const ContentfulLink: React.FC<ContentfulLinkProps> = ({ id }) => {
  const { t } = useTranslation()
  const { user } = useUser()

  if (user) {
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

  return null
}
