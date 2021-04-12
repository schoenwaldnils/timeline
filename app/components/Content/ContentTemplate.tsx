import styled from '@emotion/styled'
import { FC, ReactChild, ReactChildren } from 'react'

import { ContentfulLink } from '../ContentfulLink'
import { H1 } from '../Typography'
import { ContentImage } from './ContentImage'

const Box = styled.div`
  margin-bottom: 1em;

  :last-child {
    margin-bottom: 0;
  }
`

export interface ContentBoxProps {
  children: ReactChildren | ReactChild
}

export const ContentBox: FC<ContentBoxProps> = ({ children }) => (
  <Box>{children}</Box>
)

export interface ContentTemplateProps {
  idContentful?: string
  title?: string
  image?: string
}

export const ContentTemplate: FC<ContentTemplateProps> = ({
  idContentful,
  title,
  image,
  children,
}) => (
  <>
    {image && (
      <Box>
        <ContentImage image={image} title={title} />
      </Box>
    )}

    {title && <H1>{title}</H1>}

    {children && <Box>{children}</Box>}

    {idContentful && (
      <Box>
        <ContentfulLink id={idContentful} />
      </Box>
    )}
  </>
)
