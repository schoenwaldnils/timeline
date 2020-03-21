import React from 'react'
import styled from '@emotion/styled'

import { A } from '../Typography'
import { t } from '../../js/translate'
import { CONTENTFUL_SPACE_ID } from '../../data/constants'

const Wrapper = styled.div`
  margin-bottom: 1em;
`

interface ContentfulLinkProps {
  id: string
}

export const ContentfulLink: React.FC<ContentfulLinkProps> = ({ id }) => (
  <Wrapper>
    <A
      href={`https://app.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('misc.contentfulEdit')}
    </A>
  </Wrapper>
)
