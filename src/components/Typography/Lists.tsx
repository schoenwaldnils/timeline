import { HTMLAttributes } from 'react'

import css from './Lists.module.css'

export const UL = ({ children, className, ...props }: HTMLAttributes<HTMLUListElement>) => (
  <ul {...props} className={`${css.ul} ${className}`}>
    {children}
  </ul>
)

export const OL = ({ children, className, ...props }: HTMLAttributes<HTMLOListElement>) => (
  <ol {...props} className={`${css.ol} ${className}`}>
    {children}
  </ol>
)

export const LI = ({ children, className, ...props }: HTMLAttributes<HTMLLIElement>) => (
  <li {...props} className={`${css.li} ${className}`}>
    {children}
  </li>
)
