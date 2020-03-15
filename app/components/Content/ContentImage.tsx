import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Image = styled.img`
  max-width: 300px;
`

export interface ContentImageProps {
  image: string
  title: string
}

export const ContentImage: React.FC<ContentImageProps> = ({
  image,
  title,
  ...props
}) => (
  <picture>
    <source
      srcSet={`${image}?w=480&fl=progressive`}
      media="(min-resolution: 120dpi)"
    />
    <Image src={`${image}?w=320&fl=progressive`} alt={title} {...props} />
  </picture>
)
