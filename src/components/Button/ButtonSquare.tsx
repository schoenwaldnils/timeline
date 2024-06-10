import { ButtonHTMLAttributes } from 'react'

import css from './Button.module.css'

export const ButtonSquare = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) => <button {...props} className={css.Button__square} />
