import { useTranslations } from 'next-intl'

import { Event } from '@/@types/Event.d'
import { OurTime } from '@/components//OurTime'
import { TableList, TableListItem } from '@/components/TableList'

import { LinkToWOL } from './ContentLinkWol'
import { ContentTemplate } from './ContentTemplate'

export const ContentEvent = ({ id, name, year, image, wolLink }: Event) => {
  const t = useTranslations()

  return (
    <ContentTemplate title={name} image={image} idContentful={id}>
      <TableList>
        <TableListItem title={t('time.year', { count: 1 })}>
          {OurTime(year)}
        </TableListItem>
      </TableList>

      {wolLink && <LinkToWOL wolLink={wolLink} />}
    </ContentTemplate>
  )
}
