import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Index, useHits } from 'react-instantsearch-hooks'

import { AlgoliaHit, AlgoliaIndex } from '@/@types/algolia.d'
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
  const t = useTranslations()
  const { hits, results } = useHits<AlgoliaHit<T>>()

  return (
    <>
      <div className={css.Search_hitsTitle}>
        {results?.nbHits}{' '}
        <span className={css.Search_hitsType}>
          {t(`ui.${type}`, { count: results?.nbHits })}
        </span>
      </div>
      <div className={css.Search_hitsList}>
        {hits.map((hit) => (
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
  const themeIsDark = useStore((state) => state.theme === 'dark')

  return (
    <div className={css.Search_hits}>
      {indicies.map((index) => (
        <>
          <Index key={`index-${index}`} indexName={index}>
            <Hits type={index as AlgoliaIndex} onHitClick={onHitClick} />
          </Index>
          <HR />
        </>
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
