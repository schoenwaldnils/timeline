import React, { useContext } from 'react'
import { Document } from '@contentful/rich-text-types'

import { SidebarContext } from '../Sidebar/SidebarContext'
import { ContentTemplate } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'
import { LinkToWOL } from './ContentLinkWol'
import { UL, LI, ButtonPlain } from '../Typography'

import { ourTime } from '../../js/utils'
import { t } from '../../js/translate'

interface Person {
  name: string
  id: string
}

export interface ContentPersonProps {
  name: string
  image?: string
  startYear: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  duration?: number
  spouse?: Array<Person>
  father?: Person
  mother?: Person
  childs?: Array<Person>
  richText?: Document
  wolLink?: string
}

export const ContentPerson: React.FC<ContentPersonProps> = ({
  name,
  image,
  startYear,
  startBlurriness,
  endYear,
  endBlurriness,
  duration: age,
  spouse,
  father,
  mother,
  childs,
  richText,
  wolLink,
}) => {
  const { changeContent } = useContext(SidebarContext)

  const yearBlur = (
    year: number,
    blur: number,
    type: 'start' | 'end',
  ): string => {
    if (!blur) return ourTime(year)

    let blurYear = year + blur / 2

    if (type === 'end') {
      blurYear = year - blur / 2
    }

    return `${t('misc.approx')} ${ourTime(blurYear)} (+-${blur / 2})`
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

  if (spouse.length > 0) {
    list = {
      ...list,
      [t('relations.spouse')]: (
        <UL>
          {spouse.map(({ id, name: spouseName }) => (
            <LI key={id}>
              <ButtonPlain
                onKeyUp={e => e.keyCode === 13 && changeContent(id)}
                onClick={() => changeContent(id)}
              >
                {spouseName}
              </ButtonPlain>
            </LI>
          ))}
        </UL>
      ),
    }
  }

  if (father) {
    list = {
      ...list,
      [t('relations.father')]: (
        <ButtonPlain
          onKeyUp={e => e.keyCode === 13 && changeContent(father.id)}
          onClick={() => changeContent(father.id)}
        >
          {father.name}
        </ButtonPlain>
      ),
    }
  }

  if (mother) {
    list = {
      ...list,
      [t('relations.mother')]: (
        <ButtonPlain
          onKeyUp={e => e.keyCode === 13 && changeContent(mother.id)}
          onClick={() => changeContent(mother.id)}
        >
          {mother.name}
        </ButtonPlain>
      ),
    }
  }

  if (childs.length > 0) {
    list = {
      ...list,
      [t('relations.children')]: (
        <UL>
          {childs.map(({ id, name: childName }) => (
            <LI key={id}>
              <ButtonPlain
                onKeyUp={e => e.keyCode === 13 && changeContent(id)}
                onClick={() => changeContent(id)}
              >
                {childName}
              </ButtonPlain>
            </LI>
          ))}
        </UL>
      ),
    }
  }

  return (
    <ContentTemplate title={name} image={image}>
      <TableList list={list} />
      <br />
      <br />
      {richText && <RichText content={richText} />}
      {wolLink && <LinkToWOL wolLink={wolLink} />}
    </ContentTemplate>
  )
}

ContentPerson.defaultProps = {
  spouse: [],
  childs: [],
}
