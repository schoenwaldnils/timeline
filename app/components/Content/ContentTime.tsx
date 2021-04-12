import { FC } from 'react'

import { Time } from '../../../@types/Time'
import { useTranslation } from '../../hooks/useTranslation'
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
  const { t } = useTranslation()

  let list = {
    [t('time.start')]: OurTime(startYear),
    [t('time.end')]: endYear ? OurTime(endYear) : t('time.ongoing'),
  }

  if (duration) {
    list = {
      ...list,
      [t('time.duration')]: `${duration} ${t('time.years')}`,
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
