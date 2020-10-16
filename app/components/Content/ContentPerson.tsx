import React, { Component } from 'react'
import { Document } from '@contentful/rich-text-types'

import { ContentTemplate, ContentBox } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'
import { LinkToWOL } from './ContentLinkWol'
import { UL, LI, TextButton } from '../Typography'

import { useTranslation } from '../../hooks/useTranslation'
import { useStore, CHANGE_CONTENT } from '../Store'
import { OurTime } from '../OurTime'

interface Person {
  id: string
  name: string
}

interface ContentPersonProps {
  id: string
  name: string
  image?: string
  startYear?: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  duration?: number
  spouse?: Array<Person>
  fatherID?: string
  father?: Component
  motherID?: string
  mother?: Component
  childs?: Array<Person>
  richText?: Document
  wolLink?: string
}

export const ContentPerson: React.FC<ContentPersonProps> = ({
  id,
  name,
  image,
  startYear,
  startBlurriness,
  endYear,
  endBlurriness,
  duration: age,
  spouse = [],
  fatherID,
  father,
  motherID,
  mother,
  childs = [],
  richText,
  wolLink,
}) => {
  const { dispatch } = useStore()
  const { t } = useTranslation()

  const changeContent = newId => {
    dispatch({
      type: CHANGE_CONTENT,
      contentId: newId,
    })
  }

  const yearBlur = (
    year: number,
    blur: number,
    type: 'start' | 'end',
  ): string => {
    if (!blur) return OurTime(year)

    let blurYear = year + blur / 2

    if (type === 'end') {
      blurYear = year - blur / 2
    }

    const blurAmount = blur / 2
    const blurString = blurAmount <= 20 ? '' : blurAmount

    return `${t('misc.approx')} ${OurTime(blurYear)} (+-${blurString})`
  }

  const bornString = !startYear
    ? t('misc.unnown')
    : yearBlur(startYear, startBlurriness, 'start')

  const deathString = !endYear
    ? t('misc.unnown')
    : yearBlur(endYear, endBlurriness, 'end')

  let list: any = {
    [t('life.born')]: bornString,
    [t('life.died')]: deathString,
    [t('life.span')]:
      age && !startBlurriness && !endBlurriness
        ? `${age} ${t('time.years')}`
        : t('misc.unnown'),
  }

  if (father) {
    list = {
      ...list,
      [t('relations.father')]: (
        <TextButton onClick={() => changeContent(fatherID)}>
          {father}
        </TextButton>
      ),
    }
  }

  if (mother) {
    list = {
      ...list,
      [t('relations.mother')]: (
        <TextButton onClick={() => changeContent(motherID)}>
          {mother}
        </TextButton>
      ),
    }
  }

  if (spouse.length > 1) {
    list = {
      ...list,
      [t('relations.spouse')]: (
        <UL>
          {spouse.map(({ id: spouseID, name: spouseName }) => (
            <LI key={`spouse-${spouseID}`}>
              <TextButton onClick={() => changeContent(spouseID)}>
                {spouseName}
              </TextButton>
            </LI>
          ))}
        </UL>
      ),
    }
  } else if (spouse.length === 1) {
    list = {
      ...list,
      [t('relations.spouse')]: (
        <TextButton onClick={() => changeContent(spouse[0].id)}>
          {spouse[0].name}
        </TextButton>
      ),
    }
  }

  if (childs.length > 0) {
    list = {
      ...list,
      [t('relations.children')]: (
        <UL>
          {childs.map(({ id: childID, name: childName }) => (
            <LI key={`child-${childID}`}>
              <TextButton onClick={() => changeContent(childID)}>
                {childName}
              </TextButton>
            </LI>
          ))}
        </UL>
      ),
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
