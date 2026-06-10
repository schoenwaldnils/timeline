'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

import type { AlgoliaIndex } from '@/@types/algolia.d'
import type { FormatedData } from '@/@types/Data.d'
import type { Locale } from '@/i18n-config'
import { formatEvent, formatPerson, formatTime } from '@/utils/objectFormating/formatData'

/**
 * Fetch and format a single person/time/event for the sidebar from the Payload
 * local API. For persons it also resolves parents via the reverse `children`
 * relationship (the persons whose `children` include this id).
 */
export const fetchContentData = async <T extends AlgoliaIndex>(
  type: T,
  id: string,
  locale: Locale,
): Promise<FormatedData<T> | null> => {
  const payload = await getPayload({ config })

  switch (type) {
    case 'person': {
      const doc = await payload
        .findByID({ collection: 'person', id, locale, depth: 1 })
        .catch(() => null)
      if (!doc) return null

      const parents = await payload.find({
        collection: 'person',
        locale,
        depth: 0,
        limit: 100,
        where: { children: { contains: id } },
      })

      return formatPerson(doc, parents.docs) as FormatedData<T>
    }

    case 'time': {
      const doc = await payload
        .findByID({ collection: 'time', id, locale, depth: 1 })
        .catch(() => null)
      return doc ? (formatTime(doc) as FormatedData<T>) : null
    }

    case 'event': {
      const doc = await payload
        .findByID({ collection: 'event', id, locale, depth: 1 })
        .catch(() => null)
      return doc ? (formatEvent(doc) as FormatedData<T>) : null
    }

    default:
      return null
  }
}
