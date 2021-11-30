import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Time } from '../../../@types/Time'
import { OurTime } from '../OurTime'
import { RichText } from '../RichText'
import { TableList } from '../TableList'
import { LinkToWOL } from './ContentLinkWol'
import { ContentBox, ContentTemplate } from './ContentTemplate'

export const ContentTime: FC<Time> = ({
  id,
  name,
  startYear,
  endYear,
  duration,
  richText,
  image,
  wolLink,
}) => {
  const { t } = useTranslation('time')

  let list = {
    [t('start')]: OurTime(startYear),
    [t('end')]: endYear ? OurTime(endYear) : t('ongoing'),
  }

  if (duration) {
    list = {
      ...list,
      [t('duration')]: `${duration} ${t('years')}`,
    }
  }

  return (
    <ContentTemplate title={name} image={image} idContentful={id}>
      <ContentBox>
        <TableList list={list} />
      </ContentBox>
      {richText && (
        <ContentBox>
          <RichText content={richText} />
        </ContentBox>
      )}
      {wolLink && (
        <ContentBox>
          <LinkToWOL wolLink={wolLink} />
        </ContentBox>
      )}
    </ContentTemplate>
  )
}
