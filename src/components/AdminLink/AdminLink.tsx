import { useTranslations } from 'next-intl'

import { AlgoliaIndex } from '@/@types/algolia'
import { A } from '@/components/Typography'
import { useGetUser } from '@/hooks/useGetUser'

interface AdminLinkProps {
  collection: AlgoliaIndex
  id: string
}

export const AdminLink = ({ collection, id }: AdminLinkProps) => {
  const t = useTranslations()
  const user = useGetUser()

  if (!user) return null

  return (
    <A
      style={{
        color: 'var(--cb4)',
      }}
      href={`/admin/collections/${collection}/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('admin-edit')}
    </A>
  )
}
