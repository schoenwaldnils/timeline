import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'

export const OurTime = (year: number): string => {
  const { t } = useTranslation()

  const timeExtension = useMemo(() => t('time.extension-positive'), [t])

  if (year <= 0) {
    return `${year * -1} ${t('time.extension-negative')}`
  }

  return `${year} ${timeExtension}`
}
