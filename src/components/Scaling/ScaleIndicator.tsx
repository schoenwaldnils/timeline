'use client'

import { useTranslations } from 'next-intl'

import { useScaleStore } from '@/hooks/useScaleStore'

import css from './ScaleIndicator.module.css'

export const ScaleIndicator = () => {
  const t = useTranslations()
  const scale = useScaleStore((state) => state.scale)

  const yearsPer100Pixel = 100 / scale

  return (
    <div className={css.ScaleIndicator}>
      <div className={css.ScaleIndicator_line} /> {yearsPer100Pixel}{' '}
      {t('time.year', { count: yearsPer100Pixel })}
    </div>
  )
}
