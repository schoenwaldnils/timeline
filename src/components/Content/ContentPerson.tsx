import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Person } from '@/@types/Person.d'
import { OurTime } from '@/components/OurTime'
import { RichText } from '@/components/RichText'
import { CHANGE_CONTENT, useStore } from '@/components/Store'
import { TableList } from '@/components/TableList'
import { LI, TextButton, UL } from '@/components/Typography'

import { LinkToWOL } from './ContentLinkWol'
import { ContentBox, ContentTemplate } from './ContentTemplate'

export const ContentPerson: FC<Person> = ({
  id,
  name,
  image,
  startYear,
  startBlurriness,
  endYear,
  endBlurriness,
  age,
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

  const changeContent = (newId: string) => {
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

    return `${t('approx')} ${OurTime(blurYear)} (+-${blurString})`
  }

  let list: Record<string, unknown> = {}

  if (startYear) {
    list = {
      ...list,
      [t('time.born')]: yearBlur(startYear, startBlurriness, 'start'),
    }
  }

  if (endYear) {
    list = {
      ...list,
      [t('time.died')]: yearBlur(endYear, endBlurriness, 'end'),
    }
  }

  if (age && !startBlurriness && !endBlurriness) {
    list = {
      ...list,
      [t('time.span')]: `${age} ${t('time.year', { count: age })}`,
    }
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

  if (spouse.length >= 2) {
    list = {
      ...list,
      [t('relations.spouse', { count: spouse.length })]: (
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
      [t('relations.spouse', { count: 1 })]: (
        <TextButton onClick={() => changeContent(spouse[0].id)}>
          {spouse[0].name}
        </TextButton>
      ),
    }
  }

  if (childs.length >= 2) {
    list = {
      ...list,
      [t('relations.child', { count: childs.length })]: (
        <UL>
          {childs.map(({ id: childsID, name: childsName }) => (
            <LI key={`child-${childsID}`}>
              <TextButton onClick={() => changeContent(childsID)}>
                {childsName}
              </TextButton>
            </LI>
          ))}
        </UL>
      ),
    }
  } else if (childs.length === 1) {
    list = {
      ...list,
      [t('relations.child', { count: 1 })]: (
        <TextButton onClick={() => changeContent(childs[0].id)}>
          {childs[0].name}
        </TextButton>
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
