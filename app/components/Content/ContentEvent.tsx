import React from 'react'

import { ContentTemplate, ContentBox } from './ContentTemplate'
import { TableList } from '../TableList'
import { LinkToWOL } from './ContentLinkWol'
import { OurTime } from '../OurTime'

import { useTranslation } from '../../hooks/useTranslation'

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
  const { t } = useTranslation()
  return (
    <ContentTemplate title={name} image={image} idContentful={id}>
      <ContentBox>
        <TableList
          list={{
            [t('time.year')]: OurTime(year),
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
