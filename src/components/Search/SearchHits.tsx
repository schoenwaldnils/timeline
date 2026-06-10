import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import { Index, useHits } from 'react-instantsearch'

import { AlgoliaIndex } from '@/@types/algolia.d'
import { Theme } from '@/@types/Theme'
import { HR } from '@/components/Typography'
import { useStore } from '@/hooks/useStore'

import { ReactComponent as AlgoliaLogoBlue } from './algolia-blue.svg'
import { ReactComponent as AlgoliaLogoWhite } from './algolia-white.svg'
import css from './Search.module.css'
import { HitType, SearchHit } from './SearchHit'

const indicies: AlgoliaIndex[] = ['person', 'time', 'event']

const Hits = <T extends AlgoliaIndex>({
  type,
  onHitClick,
}: {
  type: T
  onHitClick?: () => void
}) => {
  const t = useTranslations('ui')
  const { items, results } = useHits()

  return (
    <>
      <div className={css.Search_hitsTitle}>
        {results?.nbHits}{' '}
        <span className={css.Search_hitsType}>
          {t(type as 'person', { count: results?.nbHits ?? 0 })}
        </span>
      </div>
      <div className={css.Search_hitsList}>
        {items.map((hit) => (
          <SearchHit
            key={hit.objectID}
            {...({
              type,
              ...hit,
            } as unknown as HitType)}
            onHitClick={onHitClick}
          />
        ))}
      </div>
    </>
  )
}

export const SearchHits = ({ onHitClick }: { onHitClick?: () => void }) => {
  const themeIsDark = useStore((state) => state.theme === Theme.Dark)

  return (
    <div className={css.Search_hits}>
      {indicies.map((index) => (
        <Fragment key={`index-${index}`}>
          <Index indexName={index}>
            <Hits type={index} onHitClick={onHitClick} />
          </Index>
          <HR />
        </Fragment>
      ))}
      <Link
        className={css.Search_algoliaLogo}
        href="https://www.algolia.com/"
        target="_blank"
        rel="nofollow"
      >
        <span>Search by</span>
        {themeIsDark ? <AlgoliaLogoWhite /> : <AlgoliaLogoBlue />}
      </Link>
    </div>
  )
}
