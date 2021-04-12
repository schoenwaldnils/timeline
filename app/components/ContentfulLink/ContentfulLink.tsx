import styled from '@emotion/styled'
import { FC } from 'react'

import { shades } from '../../data/colors'
import { useTranslation } from '../../hooks/useTranslation'
import { A } from '../Typography'

interface ContentfulLinkProps {
  id: string
}

const StyledA = styled(A)`
  color: ${shades.cb4};
`

export const ContentfulLink: FC<ContentfulLinkProps> = ({ id }) => {
  const { t } = useTranslation()

  return (
    <StyledA
      href={`https://app.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('misc.contentfulEdit')}
    </StyledA>
  )
}
