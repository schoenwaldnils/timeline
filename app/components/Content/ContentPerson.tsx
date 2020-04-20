import React, { useContext, Component } from 'react'

import { SidebarContext } from '../Sidebar/SidebarContext'
import { ContentTemplate, ContentBox } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'
import { LinkToWOL } from './ContentLinkWol'
import { UL, LI, ButtonPlain } from '../Typography'

import { ourTime } from '../../js/utils'
import { T } from '../../js/translate'

interface ContentPersonProps {
  id: string
  name: string
  image?: string
  startYear?: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  duration?: number
  spouse?: Array<any>
  fatherID?: string
  father?: Component
  motherID?: string
  mother?: Component
  childs?: Array<any>
  richText?: any
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

    return `${T('misc.approx')} ${ourTime(blurYear)} (+-${blur / 2})`
  }

  const bornString = !startYear
    ? T('misc.unnown')
    : yearBlur(startYear, startBlurriness, 'start')

  const deathString = !endYear
    ? T('misc.unnown')
    : yearBlur(endYear, endBlurriness, 'end')

  let list: any = {
    [T('life.born')]: bornString,
    [T('life.died')]: deathString,
    [T('life.span')]:
      age && !startBlurriness && !endBlurriness
        ? `${age} ${T('time.years')}`
        : T('misc.unnown'),
  }

  if (father) {
    list = {
      ...list,
      [T('relations.father')]: (
        <ButtonPlain
          onKeyUp={e => e.keyCode === 13 && changeContent(fatherID)}
          onClick={() => changeContent(fatherID)}
        >
          {father}
        </ButtonPlain>
      ),
    }
  }

  if (mother) {
    list = {
      ...list,
      [T('relations.mother')]: (
        <ButtonPlain
          onKeyUp={e => e.keyCode === 13 && changeContent(motherID)}
          onClick={() => changeContent(motherID)}
        >
          {mother}
        </ButtonPlain>
      ),
    }
  }

  if (spouse.length > 1) {
    list = {
      ...list,
      [T('relations.spouse')]: (
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
      [T('relations.spouse')]: (
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
      [T('relations.children')]: (
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
