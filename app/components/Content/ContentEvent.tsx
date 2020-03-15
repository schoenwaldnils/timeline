import React from 'react'

import { ContentTemplate } from './ContentTemplate'
import { TableList } from '../TableList'

import { ourTime } from '../../js/utils'
import t from '../../js/translate'

interface Props {
  title: string
  year: number
}

export const ContentEvent: React.FC<Props> = ({ title, year }) => (
  <ContentTemplate title={title}>
    <TableList
      list={{
        [t('time.year')]: ourTime(year),
      }}
    />
  </ContentTemplate>
)

ContentEvent.defaultProps = {
  title: undefined,
  year: undefined,
}
