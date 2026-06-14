'use client'

import { useTranslations } from 'next-intl'
import { HTMLAttributes } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { ButtonSquare } from '@/components/Button'
import { useScaleStore } from '@/hooks/useScaleStore'

import css from './Scaling.module.css'

export const Scaling = (props: HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations()
  const { scaleUp, scaleDown, scaleMaxed, scaleFloored } = useScaleStore(
    useShallow((state) => ({
      scaleUp: state.scaleUp,
      scaleDown: state.scaleDown,
      scaleMaxed: state.scaleMaxed,
      scaleFloored: state.scaleFloored,
    })),
  )

  return (
    <div className={css.Scaling} {...props}>
      <ButtonSquare
        onClick={scaleDown}
        disabled={scaleFloored}
        title={t('ui.scale-down')}
        aria-label={t('ui.scale-down')}
      >
        -
      </ButtonSquare>
      <ButtonSquare
        onClick={scaleUp}
        disabled={scaleMaxed}
        title={t('ui.scale-up')}
        aria-label={t('ui.scale-up')}
      >
        +
      </ButtonSquare>
    </div>
  )
}
