import { ReactNode } from 'react'

import { AlgoliaIndex } from '@/@types/algolia'
import { AdminLink } from '@/components/AdminLink'
import { Image } from '@/components/Image'
import { H1 } from '@/components/Typography'

export interface ContentTemplateProps {
  editType?: AlgoliaIndex
  editId?: string
  title?: string
  image?: {
    src: string
    width: number
    height: number
  }
  children: ReactNode
}

export const ContentTemplate = ({
  editType,
  editId,
  title,
  image,
  children,
}: ContentTemplateProps) => (
  <>
    {image && <Image src={image.src} width={image.width} height={image.height} alt={title || ''} />}

    {title && <H1>{title}</H1>}

    {children}

    {editType && editId && <AdminLink collection={editType} id={editId} />}
  </>
)
