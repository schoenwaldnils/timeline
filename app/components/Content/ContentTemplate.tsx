import React, { ReactChildren, ReactChild } from 'react'
import styled from '@emotion/styled'
import { ContentImage } from './ContentImage'
import { ContentfulLink } from '../ContentfulLink'
import { H1 } from '../Typography'

const Box = styled.div`
  margin-bottom: 1em;

  :last-of-type {
    margin-bottom: 0;
  }
`

export interface ContentBoxProps {
  children: ReactChildren | ReactChild
}

export const ContentBox: React.FC<ContentBoxProps> = ({ children }) => (
  <Box>{children}</Box>
)

export interface ContentTemplateProps {
  idContentful?: string
  title?: string
  image?: string
}

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
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

ContentTemplate.defaultProps = {
  idContentful: undefined,
}
