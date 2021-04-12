import styled from '@emotion/styled'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'

const StyledA = styled.a`
  color: var(--body-linkColor);
  text-decoration: none;
  cursor: pointer;
  transition: 150ms;

  :hover {
    color: var(--body-linkColorHover);
  }
`

export const A: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  ...props
}) => {
  if (href.includes('http') && !href.includes('localhost:3003')) {
    return (
      <StyledA
        {...{ href, ...props }}
        target="_blank"
        rel="noopener noreferrer"
      />
    )
  }

  return <StyledA {...{ href, ...props }} />
}

const StyledButton = styled.button`
  margin: 0 -0.5em;
  padding: 0 0.5em;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: var(--body-linkColor);
  text-align: left;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0;
  transition: color 150ms;

  :hover {
    color: var(--body-linkColorHover);
  }
`

export const TextButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => <StyledButton {...props} />
