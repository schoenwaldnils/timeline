import React from 'react'

import { ContentTemplate } from './ContentTemplate'
import { TableList } from '../TableList'
import { LinkToWOL } from './ContentLinkWol'

import { ourTime } from '../../js/utils'
import { t } from '../../js/translate'

interface Props {
  title: string
  year: number
  wolLink?: string
}

export const ContentEvent: React.FC<Props> = ({ title, year, wolLink }) => (
  <ContentTemplate title={title}>
    <TableList
      list={{
        [t('time.year')]: ourTime(year),
      }}
    />

    {wolLink && <LinkToWOL wolLink={wolLink} />}
  </ContentTemplate>
)
