import { HTMLAttributes } from 'react'

import css from './Other.module.css'

export const P = ({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p {...props} className={`${css.p} ${className}`}>
    {children}
  </p>
)

export const HR = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <hr {...props} className={`${css.hr} ${className}`} />
)

export const QUOTE = ({ children, className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote {...props} className={`${css.hr} ${className}`}>
    {children}
  </blockquote>
)
