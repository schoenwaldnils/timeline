import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'

export const OurTime = (year: number): string => {
  const { t } = useTranslation('time')

  const timeExtension = useMemo(() => t('extension-positive'), [t])

  if (year <= 0) {
    return `${year * -1} ${t('extension-negative')}`
  }

  return `${year} ${timeExtension}`
}
