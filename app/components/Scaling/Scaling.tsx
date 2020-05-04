import React from 'react'
import styled from '@emotion/styled'

import { T } from '../../js/translate'
import { useStore, SET_SCALE } from '../Store'
import { ButtonSquare } from '../Button'

const Wrapper = styled.div`
  display: flex;
`

const ButtonSpaced = styled(ButtonSquare)`
  & + & {
    margin-left: 0.25em;
  }
`

export const Scaling: React.FC = props => {
  const [state, dispatch] = useStore()
  const map = {
    1: 0.0625,
    2: 0.125,
    3: 0.25,
    4: 0.5,
    5: 1,
    6: 2,
    7: 4,
    8: 8,
    9: 16,
  }

  const [valueKey] = Object.keys(map).filter(key => map[key] === state.scale)

  const value = parseInt(valueKey, 10)

  const MIN_SCALE = 2
  const MAX_SCALE = 7

  const increaseScale = () => {
    dispatch({
      type: SET_SCALE,
      scale: parseFloat(map[value + 1]),
    })
  }

  const decreaseScale = () => {
    dispatch({
      type: SET_SCALE,
      scale: parseFloat(map[value - 1]),
    })
  }

  return (
    <Wrapper {...props}>
      <ButtonSpaced
        onClick={decreaseScale}
        disabled={value <= MIN_SCALE}
        aria-label={T('ui.scaleDown')}
      >
        -
      </ButtonSpaced>
      <ButtonSpaced
        onClick={increaseScale}
        disabled={value >= MAX_SCALE}
        aria-label={T('ui.scaleUp')}
      >
        +
      </ButtonSpaced>
    </Wrapper>
  )
}
