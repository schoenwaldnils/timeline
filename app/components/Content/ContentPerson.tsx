import { FC } from 'react'

import { Person } from '../../../@types/Person'
import { useTranslation } from '../../hooks/useTranslation'
import { OurTime } from '../OurTime'
import { RichText } from '../RichText'
import { CHANGE_CONTENT, useStore } from '../Store'
import { TableList } from '../TableList'
import { LI, TextButton, UL } from '../Typography'
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

    return `${t('misc.approx')} ${OurTime(blurYear)} (+-${blurString})`
  }

  let list: Record<string, unknown> = {}

  if (startYear) {
    list = {
      ...list,
      [t('life.born')]: yearBlur(startYear, startBlurriness, 'start'),
    }
  }

  if (endYear) {
    list = {
      ...list,
      [t('life.died')]: yearBlur(endYear, endBlurriness, 'end'),
    }
  }

  if (age && !startBlurriness && !endBlurriness) {
    list = {
      ...list,
      [t('life.span')]: `${age} ${t('time.years')}`,
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
