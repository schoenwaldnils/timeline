import { useMemo } from 'react'

import { useTranslation } from '../../hooks/useTranslation'

export function OurTime(year: number): string {
  const { t } = useTranslation()

  const timeExtension = useMemo(() => t('time.extension.positive'), [t])

  if (year <= 0) {
    return `${year * -1} ${t('time.extension.negative')}`
  }
  return `${year} ${timeExtension}`
}
