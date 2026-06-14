import { useTranslations } from 'next-intl'
import { CSSProperties, FC, useEffect, useMemo, useState } from 'react'

import { pixelToYear } from '@/utils/calcTimes'

import css from './TimelineCursor.module.css'

interface TimelineCursorViewProps {
  pixelYear: number
  scale: number
}

export const TimelineCursorView: FC<TimelineCursorViewProps> = ({ pixelYear, scale }) => {
  const t = useTranslations()
  const [tempPixelYear, setTempPixelYear] = useState(pixelYear)

  useEffect(() => {
    requestAnimationFrame(() => setTempPixelYear(pixelYear))
  }, [pixelYear])

  const year = useMemo(() => Math.floor(pixelToYear(pixelYear / scale)), [pixelYear, scale])

  const isNegative = year <= 0

  return (
    <div
      className={css.TimelineCursor}
      style={
        {
          '--TimelineCursor-left': `${tempPixelYear}px`,
        } as CSSProperties
      }
    >
      <div className={css.TimelineCursor_time}>
        {isNegative ? year * -1 : year}{' '}
        {isNegative ? t('time.extension-negative') : t('time.extension-positive')}
      </div>
    </div>
  )
}
