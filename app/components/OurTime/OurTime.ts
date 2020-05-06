import { useTranslation } from '../../hooks/useTranslation'

export function OurTime(year: number): string {
  const { t } = useTranslation()

  if (year <= 0) {
    return `${year * -1} ${t('time.extension.negative')}`
  }
  return `${year} ${t('time.extension.positive')}`
}
