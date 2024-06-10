import { ReactNode } from 'react'

import { ContentfulLink } from '@/components/ContentfulLink'
import { Image } from '@/components/Image'
import { H1 } from '@/components/Typography'

export interface ContentTemplateProps {
  idContentful?: string
  title?: string
  image?: {
    src: string
    width: number
    height: number
  }
  children: ReactNode
}

export const ContentTemplate = ({
  idContentful,
  title,
  image,
  children,
}: ContentTemplateProps) => (
  <>
    {image && (
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={title || ''}
      />
    )}

    {title && <H1>{title}</H1>}

    {children}

    {idContentful && <ContentfulLink id={idContentful} />}
  </>
)
