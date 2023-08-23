import styled from '@emotion/styled'
import Highlighter from 'react-highlight-words'

import { useStore } from '@/hooks/useStore'

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
  border-left: 0.125em solid
    ${({ indexType }) => typeColors[indexType as keyof typeof typeColors]};

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

type _HighlightResult = {
  name_en: HighlightResult
  name_de: HighlightResult
}

export type HitType = {
  onHitClick: () => void
  type: 'person' | 'time' | 'event'
  objectID: string
  imageUrl?: string
  selectHit: (id: string) => void
  _highlightResult: _HighlightResult
}

export const SearchHit = ({
  onHitClick,
  type,
  objectID,
  imageUrl,
  _highlightResult,
  ...hit
}: HitType) => {
  const setSidebarId = useStore((state) => state.setSidebarId)
  const locale = useStore((state) => state.locale)

  const handleHitSelect = () => {
    setSidebarId(objectID)
    onHitClick()
  }

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
    <Wrapper onClick={handleHitSelect} indexType={type}>
      <Highlighter
        searchWords={searchWords}
        autoEscape={true}
        textToHighlight={hit[`name_${locale}` as keyof typeof hit]}
      />
      <Image src={imgSrc} />
    </Wrapper>
  )
}
