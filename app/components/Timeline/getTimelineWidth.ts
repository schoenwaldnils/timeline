import { getTimePeriod } from '../../js/utils'
import { time } from '../../js/constants'

const { YEARS_BEFORE_ZERO, YEARS_AFTER_ZERO } = time

export const getTimelineWidth = (scale: number) =>
  scale * getTimePeriod(YEARS_BEFORE_ZERO * -1, YEARS_AFTER_ZERO)
