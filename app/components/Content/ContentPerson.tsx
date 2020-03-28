import React, { useContext } from 'react'
import { Document } from '@contentful/rich-text-types'

import { SidebarContext } from '../Sidebar/SidebarContext'
import { ContentTemplate, ContentBox } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'
import { LinkToWOL } from './ContentLinkWol'
import { UL, LI, ButtonPlain } from '../Typography'

import { ourTime } from '../../js/utils'
import { t } from '../../js/translate'
import { ContentfulParent } from '../Contentful/ContentfulParent'

interface Person {
  id: string
  name: string
}

export interface ContentPersonProps {
  id: string
  name: string
  image?: string
  startYear: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  duration?: number
  spouse?: Array<Person>
  father?: string
  mother?: string
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

  if (father) {
    list = {
      ...list,
      [t('relations.father')]: (
        <ButtonPlain
          onKeyUp={e => e.keyCode === 13 && changeContent(father)}
          onClick={() => changeContent(father)}
        >
          <ContentfulParent id={father} />
        </ButtonPlain>
      ),
    }
  }

  if (mother) {
    list = {
      ...list,
      [t('relations.mother')]: (
        <ButtonPlain
          onKeyUp={e => e.keyCode === 13 && changeContent(mother)}
          onClick={() => changeContent(mother)}
        >
          <ContentfulParent id={mother} />
        </ButtonPlain>
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
              <ButtonPlain
                onKeyUp={e => e.keyCode === 13 && changeContent(spouseID)}
                onClick={() => changeContent(spouseID)}
              >
                {spouseName}
              </ButtonPlain>
            </LI>
          ))}
        </UL>
      ),
    }
  } else if (spouse.length === 1) {
    list = {
      ...list,
      [t('relations.spouse')]: (
        <ButtonPlain
          onKeyUp={e => e.keyCode === 13 && changeContent(spouse[0].id)}
          onClick={() => changeContent(spouse[0].id)}
        >
          {spouse[0].name}
        </ButtonPlain>
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
              <ButtonPlain
                onKeyUp={e => e.keyCode === 13 && changeContent(childID)}
                onClick={() => changeContent(childID)}
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

ContentPerson.defaultProps = {
  spouse: [],
  childs: [],
}
