import styled from '@emotion/styled'
import { FC } from 'react'

const Wrapper = styled.div`
  max-width: 300px;
`

export interface ContentImageProps {
  image: string
  title: string
}

export const ContentImage: FC<ContentImageProps> = ({
  image,
  title,
  ...props
}) => (
  <Wrapper>
    <picture>
      <source
        srcSet={`${image}?w=480&fl=progressive`}
        media="(min-resolution: 120dpi)"
      />
      <img src={`${image}?w=320&fl=progressive`} alt={title} {...props} />
    </picture>
  </Wrapper>
)
