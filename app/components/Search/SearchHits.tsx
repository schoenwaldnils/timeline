import React from 'react'
import styled from '@emotion/styled'
import { Index, connectHits } from 'react-instantsearch-dom'

import { SearchHit } from './SearchHit'
import { useTranslation } from '../../hooks/useTranslation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  font-size: 12px;
`

const indicies = ['person', 'time', 'event']

const HitsTitle = styled.div`
  margin: 0.25em;
`

interface HitProps {
  hits: any
  type: 'person' | 'time' | 'event'
  selectHit: Function
}

const Hits: React.FC<HitProps> = ({ hits, type, selectHit }) => {
  const { t } = useTranslation()

  if (!hits.length) return null

  const plural = hits.length > 1 ? 's' : ''

  return (
    <>
      <HitsTitle>
        {hits.length} {t(`ui.${type}${plural}`)}
      </HitsTitle>
      {hits.map(hit => (
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

interface SearchHitsProps {
  selectHit: Function
}

export const SearchHits: React.FC<SearchHitsProps> = ({ selectHit }) => (
  <Wrapper>
    {indicies.map(index => (
      <Index key={`index-${index}`} indexName={index}>
        <CustomHits type={index} selectHit={selectHit} />
      </Index>
    ))}
  </Wrapper>
)
