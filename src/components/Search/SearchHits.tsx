import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'
import { Index, useHits } from 'react-instantsearch-hooks'

import { useStore } from '@/components/Store'
import { HR } from '@/components/Typography'

import { ReactComponent as AlgoliaLogoBlue } from './algolia-blue.svg'
import { ReactComponent as AlgoliaLogoWhite } from './algolia-white.svg'
import { HitType, SearchHit } from './SearchHit'

const SearchHitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  font-size: 12px;
`

const AlgoliaLogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5ch;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;

  > svg {
    width: 4em !important;
  }
`

const HitsTitle = styled.div`
  margin: 0.25em;
  font-size: 1.5em;
  color: var(--Search-titleColor);
`

const HitsType = styled.span`
  text-transform: capitalize;
`

const indicies = ['person', 'time', 'event']

const Hits: FC<{
  type: 'person' | 'time' | 'event'
  onHitClick: () => void
}> = ({ type, onHitClick }) => {
  const { t } = useTranslation()
  const { hits, results } = useHits()

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
        {results.nbHits} <HitsType>{typeString}</HitsType>
      </HitsTitle>
      {hits.map((hit) => (
        <SearchHit
          key={hit.objectID}
          {...({
            onHitClick,
            type,
            ...hit,
          } as unknown as HitType)}
        />
      ))}
    </>
  )
}

export const SearchHits: FC<{ onHitClick: () => void }> = ({ onHitClick }) => {
  const {
    store: { themeIsDark },
  } = useStore()
  return (
    <SearchHitsContainer>
      {indicies.map((index: 'person' | 'time' | 'event') => (
        <>
          <Index key={`index-${index}`} indexName={index}>
            <Hits type={index} onHitClick={onHitClick} />
          </Index>
          <HR />
        </>
      ))}
      <AlgoliaLogoWrapper
        href="https://www.algolia.com/"
        target="_blank"
        rel="nofollow"
      >
        <span>Search by</span>
        {themeIsDark ? <AlgoliaLogoWhite /> : <AlgoliaLogoBlue />}
      </AlgoliaLogoWrapper>
    </SearchHitsContainer>
  )
}
