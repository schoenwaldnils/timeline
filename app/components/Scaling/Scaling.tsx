import styled from '@emotion/styled'
import { FC } from 'react'

import { useTranslation } from '../../hooks/useTranslation'
import { ButtonSquare } from '../Button'
import { SET_SCALE, useStore } from '../Store'

const Wrapper = styled.div`
  display: flex;
`

const ButtonSpaced = styled(ButtonSquare)`
  & + & {
    margin-left: 0.25em;
  }
`

export const Scaling: FC = (props) => {
  const { t } = useTranslation()
  const { store, dispatch } = useStore()
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

  const [valueKey] = Object.keys(map).filter((key) => map[key] === store.scale)

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
        aria-label={t('ui.scaleDown')}
      >
        -
      </ButtonSpaced>
      <ButtonSpaced
        onClick={increaseScale}
        disabled={value >= MAX_SCALE}
        aria-label={t('ui.scaleUp')}
      >
        +
      </ButtonSpaced>
    </Wrapper>
  )
}
