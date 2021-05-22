import styled from '@emotion/styled'
import { CSSProperties, FC, useEffect, useMemo, useState } from 'react'

import { useTranslation } from '../../hooks/useTranslation'
import { pixelToYear } from '../../js/calcTimes'
import { OurTime } from '../OurTime'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: var(--TimelineCursor-left);
  width: 1px;
  height: 100%;
  pointer-events: none;
  background-color: var(--TimelineCursor-color);
`

const Time = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 5px;
  color: var(--TimelineCursor-color);
  white-space: nowrap;
`

interface TimelineCursorViewProps {
  pixelYear: number
  scale: number
}

export const TimelineCursorView: FC<TimelineCursorViewProps> = ({
  pixelYear,
  scale,
}) => {
  const { t } = useTranslation()
  const [tempPixelYear, setTempPixelYear] = useState(pixelYear)

  useEffect(() => {
    requestAnimationFrame(() => setTempPixelYear(pixelYear))
  }, [pixelYear])

  const properties = useMemo(
    () =>
      ({
        '--TimelineCursor-left': `${tempPixelYear}px`,
      } as CSSProperties),
    [tempPixelYear],
  )

  const year = useMemo(() => Math.floor(pixelToYear(pixelYear / scale)), [
    pixelYear,
    scale,
  ])

  const isNegative = year <= 0

  return (
    <Wrapper style={properties}>
      <Time>
        {isNegative ? year * -1 : year}{' '}
        {isNegative
          ? t('time.extension.negative')
          : t('time.extension.positive')}
      </Time>
    </Wrapper>
  )
}
