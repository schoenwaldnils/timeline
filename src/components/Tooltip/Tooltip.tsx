import { ReactNode } from 'react'

import css from './Tooltip.module.css'

type TooltipType = {
  alignRight?: boolean
  children: ReactNode
  className?: string
}

export const Tooltip = ({ alignRight, className, ...props }: TooltipType) => (
  <div
    {...props}
    className={[css.Tooltip, className].join(' ')}
    style={alignRight ? { right: 0 } : { left: 0 }}
  />
)
