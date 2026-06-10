'use client'

import { AlgoliaIndex } from '@/@types/algolia'
import { FormatedData } from '@/@types/Data'
import { ContentEvent, ContentPerson, ContentTime } from '@/components/Content'
import { useFetchSidebarData } from '@/hooks/useFetchSidebarData'

export const SidebarContent = <T extends AlgoliaIndex>({ type, id }: { type: T; id: string }) => {
  const { data } = useFetchSidebarData({ type, id })

  if (!data) return null

  switch (type) {
    case 'person':
      return <ContentPerson {...(data as FormatedData<'person'>)} />
    case 'time':
      return <ContentTime {...data} />
    case 'event':
      return <ContentEvent {...(data as FormatedData<'event'>)} />
    default:
      return null
  }
}
