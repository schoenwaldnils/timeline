import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { ButtonSquare } from '@/components/Button'
import { SET_SCALE, useStore } from '@/components/Store'

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
    1: 1 / 8,
    2: 1 / 6,
    3: 1 / 4,
    4: 1 / 3,
    5: 1 / 2, // 200 years = 100px
    6: 1,
    7: 2,
    8: 4,
    9: 8,
    10: 16,
  }

  const [valueKey] = Object.keys(map).filter((key) => map[key] === store.scale)

  const value = parseInt(valueKey, 10)

  const MIN_SCALE = 1
  const MAX_SCALE = 8

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
        title={t('ui.scale-down')}
        aria-label={t('ui.scale-down')}
      >
        -
      </ButtonSpaced>
      <ButtonSpaced
        onClick={increaseScale}
        disabled={value >= MAX_SCALE}
        title={t('ui.scale-up')}
        aria-label={t('ui.scale-up')}
      >
        +
      </ButtonSpaced>
    </Wrapper>
  )
}
