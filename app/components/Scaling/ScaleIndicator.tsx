import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { useStore } from '../Store'

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 0.675rem;
  text-transform: capitalize;
`

const Indicator = styled.div`
  position: relative;
  width: 101px;
  height: 6px;
  margin-left: 5px;
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

export const ScaleIndicator: FC = () => {
  const { t } = useTranslation()
  const { store } = useStore()

  const yearsPer100Pixel = 100 / store.scale

  return (
    <Wrapper>
      {yearsPer100Pixel} {t('time.year', { count: yearsPer100Pixel })}{' '}
      <Indicator />
    </Wrapper>
  )
}
