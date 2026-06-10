'use client'

import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

import type { AlgoliaIndex } from '@/@types/algolia.d'
import type { FormatedData } from '@/@types/Data.d'
import type { Locale } from '@/i18n-config'
import { fetchContentData } from '@/lib/fetchContentData'

export const useFetchSidebarData = <T extends AlgoliaIndex>({
  type,
  id,
}: {
  type: T
  id: string
}): {
  data: FormatedData<T> | null
} => {
  const locale = useLocale() as Locale
  const [data, setData] = useState<FormatedData<T> | null>(null)

  useEffect(() => {
    let active = true
    setData(null)

    fetchContentData(type, id, locale)
      .then((result) => {
        if (active) setData(result)
      })
      .catch((error: unknown) => {
        console.error(error)
        if (active) setData(null)
      })

    return () => {
      active = false
    }
  }, [type, id, locale])

  return { data }
}
