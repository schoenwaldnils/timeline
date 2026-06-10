import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'

import css from './Link.module.css'

export const A: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children, ...props }) => {
  if (href?.includes('http') && !href.includes('localhost')) {
    return (
      <a className={css.Link} {...{ href, ...props }} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <a className={css.Link} href={href} {...props}>
      {children}
    </a>
  )
}

export const TextButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button className={css.TextButton} {...props} />
)
