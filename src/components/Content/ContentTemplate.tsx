import { ReactNode } from 'react'

import { AlgoliaIndex } from '@/@types/algolia'
import { AdminLink } from '@/components/AdminLink'
import { H1 } from '@/components/Typography'

export interface ContentTemplateProps {
  editType?: AlgoliaIndex
  editId?: string
  title?: string
  children: ReactNode
}

export const ContentTemplate = ({ editType, editId, title, children }: ContentTemplateProps) => (
  <>
    {title && <H1>{title}</H1>}

    {children}

    {editType && editId && <AdminLink collection={editType} id={editId} />}
  </>
)
