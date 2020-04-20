import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { ContextScale } from '../ContextScale'
import { zIndexes } from '../../data/constants'

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: ${zIndexes.scale};
`

const Range = styled.input`
  width: 20rem;
`

export const Scaling: React.FC = () => {
  const { scale, changeScale } = useContext(ContextScale)

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
    changeScale(parseFloat(map[event.currentTarget.value]))
  }

  const [valueKey] = Object.keys(map).filter(key => map[key] === scale)

  return (
    <Wrapper>
      <Range
        type="range"
        min={1}
        max={9}
        value={valueKey}
        onChange={handleChange}
      />
    </Wrapper>
  )
}
