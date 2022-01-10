import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Event } from '@/@types/Event.d'
import { OurTime } from '@/components//OurTime'
import { TableList } from '@/components/TableList'

import { LinkToWOL } from './ContentLinkWol'
import { ContentBox, ContentTemplate } from './ContentTemplate'

export const ContentEvent: FC<Event> = ({ id, name, year, image, wolLink }) => {
  const { t } = useTranslation()
  return (
    <ContentTemplate title={name} image={image} idContentful={id}>
      <ContentBox>
        <TableList
          list={{
            [t('time.year', { count: 1 })]: OurTime(year),
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
