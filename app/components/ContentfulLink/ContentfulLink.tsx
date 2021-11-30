import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { shades } from '../../data/colors'
import { A } from '../Typography'

interface ContentfulLinkProps {
  id: string
}

const StyledA = styled(A)`
  color: ${shades.cb4};
`

export const ContentfulLink: FC<ContentfulLinkProps> = ({ id }) => {
  const { t } = useTranslation('common')

  return (
    <StyledA
      href={`https://app.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('contentful-edit')}
    </StyledA>
  )
}
