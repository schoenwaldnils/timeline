import styled from '@emotion/styled'
import { FC, ReactChild, ReactChildren } from 'react'

import { ContentfulLink } from '@/components/ContentfulLink'
import { Image } from '@/components/Image'
import { H1 } from '@/components/Typography'

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
  image?: {
    src: string
    width: number
    height: number
  }
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
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={title}
        />
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
