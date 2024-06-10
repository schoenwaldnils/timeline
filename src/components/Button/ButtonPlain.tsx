import { ButtonHTMLAttributes } from 'react'

import css from './Button.module.css'

export const ButtonPlain = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={[css.Button, className].join(' ')} />
)
