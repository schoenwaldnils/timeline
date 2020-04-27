import React from 'react'
import styled from '@emotion/styled'

import { zIndexes } from '../../data/constants'
import { T } from '../../js/translate'
import { useStore, SET_SCALE } from '../Store'

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: ${zIndexes.scale};
`

const Range = styled.input`
  width: 16rem;
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

  const handleChange = event => {
    dispatch({
      type: SET_SCALE,
      scale: parseFloat(map[event.currentTarget.value]),
    })
  }

  const [valueKey] = Object.keys(map).filter(key => map[key] === state.scale)

  return (
    <Wrapper>
      <Range
        type="range"
        min={2}
        max={6}
        step={1}
        value={valueKey}
        aria-label={T('ui.changeScaling')}
        onChange={handleChange}
      />
    </Wrapper>
  )
}
