import React from 'react'
import { Document } from '@contentful/rich-text-types'

import { ContentTemplate, ContentBox } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'
import { LinkToWOL } from './ContentLinkWol'

import { ourTime } from '../../js/utils'
import { T } from '../../js/translate'

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
  let list = {
    [T('time.start')]: ourTime(startYear),
    [T('time.end')]: endYear ? ourTime(endYear) : T('time.ongoing'),
  }

  if (duration) {
    list = {
      ...list,
      [T('time.duration')]: `${duration} ${T('time.years')}`,
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
