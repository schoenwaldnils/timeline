import React from 'react'
import { Document } from '@contentful/rich-text-types'

import { ContentTemplate } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'
import { LinkToWOL } from './ContentLinkWol'

import { ourTime } from '../../js/utils'
import { t } from '../../js/translate'

export interface ContentTimeProps {
  name: string
  startYear: number
  endYear?: number
  duration?: number
  richText?: Document
  image?: string
  wolLink?: string
}

export const ContentTime: React.FC<ContentTimeProps> = ({
  name,
  startYear,
  endYear,
  duration,
  richText,
  image,
  wolLink,
}) => {
  const list = {
    [t('time.start')]: ourTime(startYear),
    [t('time.end')]: endYear ? ourTime(endYear) : t('time.ongoing'),
    [t('time.duration')]: `${duration} ${t('time.years')}`,
  }

  return (
    <ContentTemplate title={name} image={image}>
      <TableList list={list} />
      <br />
      <br />
      <RichText content={richText} />
      {wolLink && <LinkToWOL wolLink={wolLink} />}
    </ContentTemplate>
  )
}

ContentTime.defaultProps = {
  name: undefined,
  startYear: undefined,
  endYear: undefined,
  duration: undefined,
  image: undefined,
}
