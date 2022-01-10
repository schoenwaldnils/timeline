import styled from '@emotion/styled'
import { ButtonHTMLAttributes, FC } from 'react'

import { ButtonPlain } from './ButtonPlain'

const Button = styled(ButtonPlain)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
  font-family: monospace;
  font-size: 1rem;
  line-height: 1;
  color: var(--Button-color);
  background-color: var(--Button-backgroundColor);
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;
`

export const ButtonSquare: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  return <Button {...props} />
}
