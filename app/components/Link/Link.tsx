import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import colors from '../../js/colors'

const A = styled.a`
  color: ${colors.themeColor};
  text-decoration: none;
  cursor: pointer;
  transition: 150ms;

  :hover {
    color: ${colors.green};
  }
`

export const Link = ({ href, ...props }) => {
  if (href.includes('http') && !href.includes('localhost:3003')) {
    return (
      <A {...{ href, ...props }} target="_blank" rel="noopener noreferrer" />
    )
  }

  return <A {...{ href, ...props }} />
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
}
