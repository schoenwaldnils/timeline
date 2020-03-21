import React from 'react'
import styled from '@emotion/styled'
import { ContentImage } from './ContentImage'
import { ContentfulLink } from '../ContentfulLink'

const Title = styled.h1`
  margin: 0 0 0.5em;
`

const Image = styled(ContentImage)`
  margin-bottom: 1em;
`

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
    {image && <Image image={image} title={title} />}

    {title && <Title>{title}</Title>}

    {children}

    {idContentful && <ContentfulLink id={idContentful} />}
  </>
)

ContentTemplate.defaultProps = {
  idContentful: undefined,
}
