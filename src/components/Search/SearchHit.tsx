// import Image from 'next/image'
import { useLocale } from 'next-intl'
import Highlighter from 'react-highlight-words'

import type { AlgoliaHit, AlgoliaIndex } from '@/@types/algolia.d'
import { useSidebarStore } from '@/hooks/useSidebarStore'

import { ButtonPlain } from '../Button'
// import DefaultImgUrl from './defaultImg.svg'
import css from './Search.module.css'

const IMAGE_SIZE = 28

const typeColors = {
  person: 'var(--Timespan-backgroundColor--person)',
  time: 'var(--Timespan-backgroundColor--time)',
  event: 'var(--Event-backgroundColor)',
} satisfies Record<AlgoliaIndex, string>

type HighlightResult = {
  value: string
  matchLevel: string
  matchedWords: string[]
}

type _HighlightResult = {
  name_en: HighlightResult
  name_de: HighlightResult
}

export type HitType = AlgoliaHit<AlgoliaIndex> & {
  onHitClick?: () => void
  type: AlgoliaIndex
  objectID: string
  imageUrl?: string
  selectHit: (id: string) => void
  _highlightResult: _HighlightResult
}

export const SearchHit = ({
  onHitClick,
  type,
  objectID,
  // imageUrl,
  _highlightResult,
  ...hit
}: HitType) => {
  const locale = useLocale()
  const setSidebar = useSidebarStore((state) => state.setSidebar)

  // const defaultImages = {
  //   person: `//secure.gravatar.com/avatar/?s=${IMAGE_SIZE * 2}&d=mm`,
  //   time: DefaultImgUrl,
  //   event: DefaultImgUrl,
  // }

  // const imgSrc = imageUrl
  //   ? `${imageUrl}?w=${IMAGE_SIZE * 2}&h=${IMAGE_SIZE * 2}&fit=fill`
  //   : (defaultImages[type] as string)

  const searchWords =
    _highlightResult[`name_${locale}` as keyof _HighlightResult]?.matchedWords || []

  const hitName = hit[`name_${locale}` as keyof typeof hit] as string

  const onHitClickHandler = () => {
    if (onHitClick) {
      onHitClick()
    }
    setSidebar({ type: 'person', id: objectID })
  }

  return (
    <ButtonPlain
      className={css.Search_hit}
      style={{
        height: `${IMAGE_SIZE}px`,
        borderLeftColor: typeColors[type],
      }}
      onClick={onHitClickHandler}
    >
      <Highlighter searchWords={searchWords} autoEscape={true} textToHighlight={hitName} />
      {/* <Image src={imgSrc} width={IMAGE_SIZE} alt={hitName} /> */}
    </ButtonPlain>
  )
}
