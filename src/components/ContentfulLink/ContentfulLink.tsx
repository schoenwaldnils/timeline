import { useTranslations } from 'next-intl'

import { A } from '@/components/Typography'

interface ContentfulLinkProps {
  id: string
}

export const ContentfulLink = ({ id }: ContentfulLinkProps) => {
  const t = useTranslations()

  return (
    <A
      style={{
        color: 'var(--cb4)',
      }}
      href={`https://app.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('contentful-edit')}
    </A>
  )
}
