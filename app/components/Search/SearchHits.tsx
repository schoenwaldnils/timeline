import styled from '@emotion/styled'
import { FC } from 'react'
import { Index, useHits } from 'react-instantsearch-hooks'

import { useTranslation } from '../../hooks/useTranslation'
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

const Hits: FC<{ onHitClick: () => void }> = ({ onHitClick }) => {
  const { t } = useTranslation()
  const { hits, results } = useHits()

  const plural = results.nbHits > 1 ? 's' : ''

  const type = results.index

  const typeString = t(`ui.${type}${plural}`)

  if (!hits.length) {
    return (
      <HitsTitle>{t(`ui.notFound`, { value: t(`ui.${type}s`) })}</HitsTitle>
    )
  }

  return (
    <>
      <HitsTitle>
        {results.nbHits} {typeString}
      </HitsTitle>
      {hits.map((hit) => (
        <SearchHit
          key={hit.objectID}
          {...(({
            onHitClick,
            type,
            ...hit,
          } as unknown) as HitType)}
        />
      ))}
    </>
  )
}

export const SearchHits: FC<{ onHitClick: () => void }> = ({ onHitClick }) => {
  return (
    <SearchHitsContainer>
      {indicies.map((index) => (
        <>
          <Index key={`index-${index}`} indexName={index}>
            <Hits onHitClick={onHitClick} />
          </Index>
          <HR />
        </>
      ))}
    </SearchHitsContainer>
  )
}
