import styled from '@emotion/styled'
import { FC, MouseEventHandler, ReactNode } from 'react'

const IconContainer = styled.div`
  display: inline-block;
  padding: 0.225em;
`

export const IconPadded: FC<{
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
}> = ({ className, onClick, children }) => (
  <IconContainer className={className} onClick={onClick}>
    {children}
  </IconContainer>
)
