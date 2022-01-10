import { getTimePeriod } from '@/js/utils'

export const getTimelineWidth = (
  startYear: number,
  endYear: number,
  scale: number,
): number => {
  return scale * getTimePeriod(startYear * -1, endYear)
}
