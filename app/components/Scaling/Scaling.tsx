import React from 'react'
import styled from '@emotion/styled'

import { zIndexes } from '../../data/constants'
import { T } from '../../js/translate'
import { useStore, SET_SCALE } from '../Store'
import { colors } from '../../js/colors'

const Wrapper = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 1rem;
  z-index: ${zIndexes.scale};
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
  padding: 0;
  font-family: monospace;
  font-size: 1rem;
  line-height: 1;
  color: ${colors.greenDarker};
  cursor: pointer;
  background-color: #fff;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;

  & + & {
    margin-top: 0.25em;
  }
`

export const Scaling: React.FC = () => {
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
  const MAX_SCALE = 6

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
    <Wrapper>
      <Button
        onClick={increaseScale}
        disabled={value >= MAX_SCALE}
        aria-label={T('ui.scaleUp')}
      >
        +
      </Button>
      <Button
        onClick={decreaseScale}
        disabled={value <= MIN_SCALE}
        aria-label={T('ui.scaleDown')}
      >
        -
      </Button>
    </Wrapper>
  )
}
