import { useCallback, useEffect } from 'react'

import { AlgoliaIndex } from '@/@types/algolia'
import { FormatedData } from '@/@types/Data'
import { ContentEvent, ContentPerson, ContentTime } from '@/components/Content'
import { useFetchSidebarData } from '@/hooks/useFetchSidebarData'

export const ContentfulContent = <T extends AlgoliaIndex>({
  type,
  id,
}: {
  type: T
  id: string
}) => {
  const { data, error, refetch } = useFetchSidebarData({
    type,
    id,
  })

  useEffect(() => {
    refetch()
  }, [id, refetch])

  const Component = useCallback(() => {
    if (!data) return null

    switch (type) {
      case 'person':
        return <ContentPerson {...(data as FormatedData<'person'>)} />
      case 'time':
        return <ContentTime {...(data as FormatedData<'time'>)} />
      case 'event':
        return <ContentEvent {...(data as FormatedData<'event'>)} />
      default:
        return null
    }
  }, [data, type])

  if (error) {
    console.error(error)
    return null
  }

  return <Component />
}
