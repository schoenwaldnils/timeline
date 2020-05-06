import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
  background: none;
  border: 0;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
`

export const ButtonPlain = props => <Button {...props} />
