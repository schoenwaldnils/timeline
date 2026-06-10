import { HTMLAttributes } from 'react'

import css from './Headlines.module.css'

export const HSmall = ({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <small {...props} className={`${css.small} ${className}`}>
    {children}
  </small>
)

export const H1 = ({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h1 {...props} className={`${css.h1} ${className}`}>
    {children}
  </h1>
)

export const H2 = ({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h2 {...props} className={`${css.h2} ${className}`}>
    {children}
  </h2>
)

export const H3 = ({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 {...props} className={`${css.h3} ${className}`}>
    {children}
  </h3>
)
