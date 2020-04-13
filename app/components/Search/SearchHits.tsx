import React from 'react'
import styled from '@emotion/styled'
import { Index, connectHits } from 'react-instantsearch-dom'

import { SearchHit } from './SearchHit'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`

const indicies = ['person', 'timespan', 'event']

interface HitProps {
  hits: any
  type: 'person' | 'timespan' | 'event'
  selectHit: Function
}

const Hits: React.FC<HitProps> = ({ hits, type, selectHit }) => (
  <>
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
