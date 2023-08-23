import styled from '@emotion/styled'
import { useTranslations } from 'next-intl'
import { HTMLAttributes } from 'react'

import { ButtonSquare } from '@/components/Button'
import { useStore } from '@/hooks/useStore'

const Wrapper = styled.div`
  display: flex;
`

const ButtonSpaced = styled(ButtonSquare)`
  & + & {
    margin-left: 0.25em;
  }
`

export const Scaling = (props: HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations()
  const scaleUp = useStore((state) => state.scaleUp)
  const scaleDown = useStore((state) => state.scaleDown)
  const scaleMaxed = useStore((state) => state.scaleMaxed)
  const scaleFloored = useStore((state) => state.scaleFloored)

  return (
    <Wrapper {...props}>
      <ButtonSpaced
        onClick={scaleDown}
        disabled={scaleFloored}
        title={t('ui.scale-down')}
        aria-label={t('ui.scale-down')}
      >
        -
      </ButtonSpaced>
      <ButtonSpaced
        onClick={scaleUp}
        disabled={scaleMaxed}
        title={t('ui.scale-up')}
        aria-label={t('ui.scale-up')}
      >
        +
      </ButtonSpaced>
    </Wrapper>
  )
}
