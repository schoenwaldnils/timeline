import { t } from './translate'

export function getTimePeriod(startyear, endyear) {
  let calcedPeriod = endyear - startyear
  if (startyear < 0 && endyear > 0) {
    calcedPeriod -= 1
  }
  return calcedPeriod
}

export function htmlEntities(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function ourTime(year: number): string {
  if (year <= 0) {
    return `${year * -1} ${t('time.extension.negative')}`
  }
  return `${year} ${t('time.extension.positive')}`
}
