import React from 'react'
import PropTypes from 'prop-types'

import { ContentTemplate } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'

import { ourTime } from '../../js/utils'
import t from '../../js/translate'

export interface ContentTimeProps {
  name: string
  startYear: Number
  endYear?: Number
  duration?: Number
  richText?: Object
  image?: string
  changeSidebarContent: Function
}

export const ContentTime: React.FC<ContentTimeProps> = ({
  name,
  startYear,
  endYear,
  duration,
  richText,
  image,
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
