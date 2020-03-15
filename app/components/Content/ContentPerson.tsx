import React from 'react'

import { ContentTemplate } from './ContentTemplate'
import { TableList } from '../TableList'
import { RichText } from '../RichText'

import { ourTime, getTimePeriod } from '../../js/utils'
import t from '../../js/translate'
import { UL, LI } from '../Typography'

interface Person {
  name: string
  id: string
}

export interface ContentPersonProps {
  name: string
  image?: Object
  startYear: number
  startBlurriness?: string
  endYear?: number
  endBlurriness?: string
  spouse?: Array<Person>
  father?: Person
  mother?: Person
  childs?: Array<Person>
  richText?: Object
  changeSidebarContent: Function
}

export const ContentPerson: React.FC<ContentPersonProps> = props => {
  const {
    name,
    image,
    startYear,
    startBlurriness,
    endYear,
    endBlurriness,
    spouse,
    father,
    mother,
    childs,
    changeSidebarContent,
    richText,
  } = props

  let age

  if (startYear) {
    age = getTimePeriod(startYear, endYear || new Date().getFullYear())
  }

  const bornString = !startYear
    ? t('misc.unnown')
    : `${startBlurriness ? t('misc.approx') : ''} ${ourTime(startYear)}${
        startBlurriness ? `(${startBlurriness})` : ''
      }`

  const deathString = !endYear
    ? t('misc.unnown')
    : `${endBlurriness ? t('misc.approx') : ''} ${ourTime(endYear)}${
        endBlurriness ? `(${endBlurriness})` : ''
      }`

  let list = {
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
      [t('relations.spouse')]: spouse.map(({ id, name: spouseName }) => (
        <a
          key={id}
          className="u-link"
          onKeyUp={e => e.keyCode === 13 && changeSidebarContent(id)}
          onClick={() => changeSidebarContent(id)}
          role="button"
          tabIndex={0}
        >
          <li>{spouseName}</li>
        </a>
      )),
    }
  }

  if (father) {
    list = {
      ...list,
      [t('relations.father')]: (
        <a
          className="u-link"
          onKeyUp={e => e.keyCode === 13 && changeSidebarContent(father.id)}
          onClick={() => changeSidebarContent(father.id)}
          role="button"
          tabIndex={0}
        >
          {father.name}
        </a>
      ),
    }
  }

  if (mother) {
    list = {
      ...list,
      [t('relations.mother')]: (
        <a
          className="u-link"
          onKeyUp={e => e.keyCode === 13 && changeSidebarContent(mother.id)}
          onClick={() => changeSidebarContent(mother.id)}
          role="button"
          tabIndex={0}
        >
          {mother.name}
        </a>
      ),
    }
  }

  if (childs.length > 0) {
    list = {
      ...list,
      [t('relations.children')]: (
        <UL>
          {childs.map(({ id, name: childName }) => (
            <LI key={childName}>
              <a
                key={id}
                className="u-link"
                onKeyUp={e => e.keyCode === 13 && changeSidebarContent(id)}
                onClick={() => changeSidebarContent(id)}
                role="button"
                tabIndex={0}
              >
                {childName}
              </a>
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
      <RichText content={richText} />
    </ContentTemplate>
  )
}

ContentPerson.defaultProps = {
  startYear: undefined,
  startBlurriness: undefined,
  endYear: undefined,
  endBlurriness: undefined,
  spouse: [],
  father: undefined,
  mother: undefined,
  childs: [],
}
