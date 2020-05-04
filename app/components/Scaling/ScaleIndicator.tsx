import React from 'react'
import styled from '@emotion/styled'

import { useStore } from '../Store'
import { T } from '../../js/translate'

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

export const ScaleIndicator = props => {
  const [state] = useStore()
  const yearsPer100Pixel = 100 / state.scale

  return (
    <Wrapper {...props}>
      {yearsPer100Pixel} {T('time.years')} <Indicator />
    </Wrapper>
  )
}
