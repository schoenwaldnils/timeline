import React from 'react'
import styled from '@emotion/styled'

const StyledA = styled.a`
  color: var(--body-linkColor);
  text-decoration: none;
  cursor: pointer;
  transition: 150ms;

  :hover {
    color: var(--body-linkColorHover);
  }
`

interface AProps {
  href: string
  [key: string]: any
}

export const A: React.FC<AProps> = ({ href, ...props }) => {
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
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0;
  transition: color 150ms;

  :hover {
    color: var(--body-linkColorHover);
  }
`

export const TextButton = props => <StyledButton {...props} tabIndex={0} />
