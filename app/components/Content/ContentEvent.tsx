import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Event } from '../../../@types/Event'
import { OurTime } from '../OurTime'
import { TableList } from '../TableList'
import { LinkToWOL } from './ContentLinkWol'
import { ContentBox, ContentTemplate } from './ContentTemplate'

export const ContentEvent: FC<Event> = ({ id, name, year, image, wolLink }) => {
  const { t } = useTranslation('time')
  return (
    <ContentTemplate title={name} image={image} idContentful={id}>
      <ContentBox>
        <TableList
          list={{
            [t('year')]: OurTime(year),
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
