import React from 'react'

import { ContentTemplate, ContentBox } from './ContentTemplate'
import { TableList } from '../TableList'
import { LinkToWOL } from './ContentLinkWol'

import { ourTime } from '../../js/utils'
import { t } from '../../js/translate'

interface Props {
  id: string
  name: string
  year: number
  image?: string
  wolLink?: string
}

export const ContentEvent: React.FC<Props> = ({
  id,
  name,
  year,
  image,
  wolLink,
}) => (
  <ContentTemplate title={name} image={image} idContentful={id}>
    <ContentBox>
      <TableList
        list={{
          [t('time.year')]: ourTime(year),
        }}
      />
    </ContentBox>

    {wolLink && (
      <ContentBox>
        <LinkToWOL wolLink={wolLink} />
      </ContentBox>
    )}
  </ContentTemplate>
)
