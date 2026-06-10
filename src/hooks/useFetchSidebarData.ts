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
  const key = `${type}:${id}:${locale}`
  const [result, setResult] = useState<{
    key: string
    data: FormatedData<T> | null
  }>({ key, data: null })

  useEffect(() => {
    let active = true

    fetchContentData(type, id, locale)
      .then((data) => {
        if (active) setResult({ key: `${type}:${id}:${locale}`, data })
      })
      .catch((error: unknown) => {
        console.error(error)
        if (active) setResult({ key: `${type}:${id}:${locale}`, data: null })
      })

    return () => {
      active = false
    }
  }, [type, id, locale])

  // Stale results from a previous type/id/locale are masked by the key check,
  // so no synchronous reset inside the effect is needed.
  return { data: result.key === key ? result.data : null }
}
