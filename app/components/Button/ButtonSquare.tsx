import styled from '@emotion/styled'
import { ButtonHTMLAttributes, FC } from 'react'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
  padding: 0;
  font-family: monospace;
  font-size: 1rem;
  line-height: 1;
  color: var(--Button-color);
  cursor: pointer;
  background-color: var(--Button-backgroundColor);
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
`

export const ButtonSquare: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  return <Button {...props} />
}
