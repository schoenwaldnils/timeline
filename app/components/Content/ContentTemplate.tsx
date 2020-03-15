import React from 'react'
import styled from '@emotion/styled'
import { ContentImage } from './ContentImage'

const Title = styled.h1`
  margin: 0 0 0.5em;
`

const Image = styled(ContentImage)`
  margin-bottom: 1em;
`

export interface ContentTemplateProps {
  title?: string
  image?: Object
}

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  image,
  children,
}) => (
  <>
    {image && <Image image={image} title={title} />}
    <Title>{title}</Title>
    {children}
  </>
)
