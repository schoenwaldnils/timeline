import React from 'react'

import { ContentTemplate, ContentBox } from './ContentTemplate'
import { TableList } from '../TableList'
import { LinkToWOL } from './ContentLinkWol'

import { ourTime } from '../../js/utils'
import { T } from '../../js/translate'

interface ContentEventProps {
  id: string
  name: string
  year: number
  image?: string
  wolLink?: string
}

export const ContentEvent: React.FC<ContentEventProps> = ({
  id,
  name,
  year,
  image,
  wolLink,
}) => {
  return (
    <ContentTemplate title={name} image={image} idContentful={id}>
      <ContentBox>
        <TableList
          list={{
            [T('time.year')]: ourTime(year),
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
}
