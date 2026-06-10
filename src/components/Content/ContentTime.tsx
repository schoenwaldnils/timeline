import { useTranslations } from 'next-intl'

import { Time } from '@/@types/Time'
import { OurTime } from '@/components/OurTime'
import { RichText } from '@/components/RichText'
import { TableList, TableListItem } from '@/components/TableList'

import { LinkToWOL } from './ContentLinkWol'
import { ContentTemplate } from './ContentTemplate'

export const ContentTime = ({
  id,
  name,
  startYear,
  endYear,
  duration,
  richText,
  image,
  wolLink,
}: Time) => {
  const t = useTranslations()

  return (
    <ContentTemplate title={name} image={image} editType="time" editId={id}>
      <TableList>
        <TableListItem title={t('time.start')}>
          {startYear ? OurTime(startYear) : t('unknown')}
        </TableListItem>

        <TableListItem title={t('time.end')}>
          {endYear ? OurTime(endYear) : t('time.ongoing')}
        </TableListItem>

        {duration && (
          <TableListItem title={t('time.duration')}>
            {duration} {t('time.year', { count: duration })}
          </TableListItem>
        )}
      </TableList>

      {richText && <RichText content={richText} />}

      {wolLink && <LinkToWOL wolLink={wolLink} />}
    </ContentTemplate>
  )
}
