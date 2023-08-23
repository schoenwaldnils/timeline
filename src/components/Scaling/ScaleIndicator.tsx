'use client'
import styled from '@emotion/styled'
import { useTranslations } from 'next-intl'

import { useStore } from '@/hooks/useStore'

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1ch;
  font-size: 0.675rem;
  text-transform: capitalize;
`

const Indicator = styled.div`
  position: relative;
  width: 101px;
  height: 6px;
  margin-left: 4px;
  border-bottom: 1px solid;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 1px;
    height: 100%;
    border-left: 1px solid;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`

export const ScaleIndicator = () => {
  const t = useTranslations()
  const scale = useStore((state) => state.scale)

  const yearsPer100Pixel = 100 / scale

  return (
    <Wrapper>
      <Indicator /> {yearsPer100Pixel} {t('time.year_other')}
    </Wrapper>
  )
}
