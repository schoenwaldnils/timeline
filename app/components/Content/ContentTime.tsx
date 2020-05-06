import React from 'react'
import { Document } from '@contentful/rich-text-types'

import { ContentTemplate, ContentBox } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'
import { LinkToWOL } from './ContentLinkWol'

import { useTranslation } from '../../hooks/useTranslation'
import { OurTime } from '../OurTime'

export interface ContentTimeProps {
  id: string
  name: string
  startYear: number
  endYear?: number
  duration?: number
  richText?: Document
  image?: string
  wolLink?: string
}

export const ContentTime: React.FC<ContentTimeProps> = ({
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
