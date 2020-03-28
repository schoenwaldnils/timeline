import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { shades, themeColors } from '../../js/colors'

const StyledA = styled.a`
  color: ${themeColors.themeColor};
  text-decoration: none;
  cursor: pointer;
  transition: 150ms;

  :hover {
    color: ${shades.cb2};
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

A.propTypes = {
  href: PropTypes.string.isRequired,
}

const StyledButton = styled.button`
  margin: 0 -0.5em;
  padding: 0 0.5em;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: ${themeColors.linkColor};
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0;
  transition: color 150ms;

  :hover {
    color: ${themeColors.linkColorHover};
  }
`

export const ButtonPlain = props => <StyledButton {...props} tabIndex={0} />
