import styled from '@emotion/styled'
import { FC } from 'react'

import { useTranslation } from '../../hooks/useTranslation'
import { useStore } from '../Store'

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 0.675rem;
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
      {yearsPer100Pixel} {t('time.years')} <Indicator />
    </Wrapper>
  )
}
