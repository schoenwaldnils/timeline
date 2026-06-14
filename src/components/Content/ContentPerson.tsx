import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'

import { Person } from '@/@types/Person.d'
import { OurTime } from '@/components/OurTime'
import { RichText } from '@/components/RichText'
import { TableList, TableListItem } from '@/components/TableList'
import { LI, TextButton, UL } from '@/components/Typography'
import { useSidebarStore } from '@/hooks/useSidebarStore'

import { LinkToWOL } from './ContentLinkWol'
import { ContentTemplate } from './ContentTemplate'

export const ContentPerson = ({
  id,
  name,
  startYear,
  startBlurriness,
  endYear,
  endBlurriness,
  age,
  spouse = [],
  parents,
  childs = [],
  richText,
  wolLink,
}: Person) => {
  const t = useTranslations()
  const setSidebar = useSidebarStore((state) => state.setSidebar)

  const setPerson = useCallback((id: string) => setSidebar({ type: 'person', id }), [setSidebar])

  const yearBlur = useCallback(
    (type: 'start' | 'end', year: number, blur?: number): string => {
      if (!blur) {
        return OurTime(year)
      }

      let blurYear = year + blur / 2

      if (type === 'end') {
        blurYear = year - blur / 2
      }

      const blurAmount = blur / 2
      const blurString = blurAmount <= 20 ? '' : blurAmount

      return `${t('approx')} ${OurTime(blurYear)} (+-${blurString})`
    },
    [t],
  )

  const father = useMemo(() => parents?.find((p) => p.gender === 'male'), [parents])
  const mother = useMemo(() => parents?.find((p) => p.gender === 'female'), [parents])

  return (
    <ContentTemplate title={name} editType="person" editId={id}>
      <TableList>
        {startYear && (
          <TableListItem title={t('time.born')}>
            {yearBlur('start', startYear, startBlurriness)}
          </TableListItem>
        )}

        {endYear && (
          <TableListItem title={t('time.died')}>
            {yearBlur('end', endYear, endBlurriness)}
          </TableListItem>
        )}

        {age && !startBlurriness && !endBlurriness && (
          <TableListItem title={t('time.span')}>
            {age} {t('time.year', { count: age })}
          </TableListItem>
        )}

        {father && (
          <TableListItem title={t('relations.father')}>
            <TextButton onClick={() => setPerson(father.id)}>{father.name}</TextButton>
          </TableListItem>
        )}

        {mother && (
          <TableListItem title={t('relations.mother')}>
            <TextButton onClick={() => setPerson(mother.id)}>{mother.name}</TextButton>
          </TableListItem>
        )}

        {spouse.length >= 2 && (
          <TableListItem title={t('relations.spouse', { count: spouse.length })}>
            <UL>
              {spouse.map(({ id: spouseID, name: spouseName }) => (
                <LI key={`spouse-${spouseID}`}>
                  <TextButton onClick={() => setPerson(spouseID)}>{spouseName}</TextButton>
                </LI>
              ))}
            </UL>
          </TableListItem>
        )}

        {spouse.length === 1 && (
          <TableListItem title={t('relations.spouse', { count: 1 })}>
            <TextButton onClick={() => setPerson(spouse[0].id)}>{spouse[0].name}</TextButton>
          </TableListItem>
        )}

        {childs.length >= 2 && (
          <TableListItem title={t('relations.child', { count: childs.length })}>
            <UL>
              {childs.map(({ id: childID, name: childName }) => (
                <LI key={`child-${childID}`}>
                  <TextButton onClick={() => setPerson(childID)}>{childName}</TextButton>
                </LI>
              ))}
            </UL>
          </TableListItem>
        )}

        {childs.length === 1 && (
          <TableListItem title={t('relations.child', { count: 1 })}>
            <TextButton onClick={() => setPerson(childs[0].id)}>{childs[0].name}</TextButton>
          </TableListItem>
        )}
      </TableList>

      {richText && <RichText content={richText} />}

      {wolLink && <LinkToWOL wolLink={wolLink} />}
    </ContentTemplate>
  )
}
