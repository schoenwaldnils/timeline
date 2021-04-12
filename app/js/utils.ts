export function getTimePeriod(startyear: number, endyear: number): number {
  let calcedPeriod = endyear - startyear
  if (startyear < 0 && endyear > 0) {
    calcedPeriod -= 1
  }
  return calcedPeriod
}

export function htmlEntities(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
