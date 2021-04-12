import styled from '@emotion/styled'
import { FC } from 'react'
import Highlighter from 'react-highlight-words'

import { useStore } from '../Store'
import DefaultImgUrl from './defaultImg.svg'

const IMAGE_SIZE = 28

const typeColors = {
  person: 'var(--Timespan-backgroundColor--person)',
  time: 'var(--Timespan-backgroundColor--time)',
  event: 'var(--Event-backgroundColor)',
}

const Wrapper = styled.button<{ indexType: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  padding-top: 2px;
  padding-right: 0.5em;
  padding-bottom: 2px;
  padding-left: 0.75em;
  line-height: 1.2;
  text-align: left;
  cursor: pointer;
  background: none;
  border: 0;
  border-left: 0.125em solid ${({ indexType }) => typeColors[indexType]};

  :last-child {
    margin-bottom: 0;
  }
`

const Image = styled.img`
  width: ${IMAGE_SIZE}px;
  margin-left: 1em;
  border-radius: 0.3em;
`

type HighlightResult = {
  value: string
  matchLevel: string
  matchedWords: string[]
}

export type HitType = {
  type: 'person' | 'time' | 'event'
  objectID: string
  imageUrl: string
  selectHit: (id: string) => void
  _highlightResult: {
    name_en: HighlightResult
    name_de: HighlightResult
  }
}

export const SearchHit: FC<HitType> = ({
  type,
  objectID,
  imageUrl,
  selectHit,
  _highlightResult,
  ...hit
}) => {
  const { store } = useStore()
  const { locale } = store

  const defaultImages = {
    person: `//secure.gravatar.com/avatar/?s=${IMAGE_SIZE * 2}&d=mm`,
    time: DefaultImgUrl,
    event: DefaultImgUrl,
  }

  const imgSrc = imageUrl
    ? `${imageUrl}?w=${IMAGE_SIZE * 2}&h=${IMAGE_SIZE * 2}&fit=fill`
    : (defaultImages[type] as string)

  const searchWords = _highlightResult[`name_${locale}`]?.matchedWords || []

  return (
    <Wrapper onClick={() => selectHit(objectID)} indexType={type}>
      <Highlighter
        searchWords={searchWords}
        autoEscape={true}
        textToHighlight={hit[`name_${locale}`]}
      />
      <Image src={imgSrc} />
    </Wrapper>
  )
}
