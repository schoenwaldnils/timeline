import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

export const OurTime = (year: number): string => {
  const t = useTranslations()

  const timeExtension = useMemo(() => t('time.extension-positive'), [t])

  if (year <= 0) {
    return `${year * -1} ${t('time.extension-negative')}`
  }

  return `${year} ${timeExtension}`
}
