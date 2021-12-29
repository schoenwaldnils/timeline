import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'
import { connectHits, Index } from 'react-instantsearch-dom'

import { HR } from '../Typography'
import { HitType, SearchHit } from './SearchHit'

const SearchHitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  font-size: 12px;
`

const indicies = ['person', 'time', 'event']

const HitsTitle = styled.div`
  margin: 0.25em;
  font-size: 1.5em;
  color: var(--Search-titleColor);
`

const HitsType = styled.span`
  text-transform: capitalize;
`

interface HitProps {
  hits: HitType[]
  type: 'person' | 'time' | 'event'
  selectHit: (id: string) => void
}

const Hits: FC<HitProps> = ({ hits, type, selectHit }) => {
  const { t } = useTranslation()

  const typeString = t(`ui.${type}`, { count: hits.length })

  if (!hits.length) {
    return (
      <HitsTitle>
        {t(`ui.not-found`, {
          type: t(`ui.${type}`, { count: 1 }),
          context: type === 'person' ? 'female' : null,
        })}
      </HitsTitle>
    )
  }

  return (
    <>
      <HitsTitle>
        {hits.length} <HitsType>{typeString}</HitsType>
      </HitsTitle>
      {hits.map((hit) => (
        <SearchHit
          key={hit.objectID}
          type={type}
          selectHit={selectHit}
          {...hit}
        />
      ))}
    </>
  )
}

const CustomHits = connectHits(Hits)

export const SearchHits: FC<Pick<HitProps, 'selectHit'>> = ({ selectHit }) => {
  return (
    <SearchHitsContainer>
      {indicies.map((index) => (
        <>
          <Index key={`index-${index}`} indexName={index}>
            <CustomHits
              type={index as HitProps['type']}
              selectHit={selectHit}
            />
          </Index>
          <HR />
        </>
      ))}
    </SearchHitsContainer>
  )
}
