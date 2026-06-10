import config from '@payload-config'
import { getPayload } from 'payload'

import type { Locale } from '@/i18n-config'
import type { TimelineQueryData } from '@/utils/objectFormating/formatTimelineData'

/**
 * Fetch the minimal person/time/event data the timeline needs, straight from the
 * Payload local API. Returns plain documents that are serialized to the client,
 * where `formatTimelineData` turns them into positioned timespans/events.
 */
export const fetchTimelineData = async (locale: Locale): Promise<TimelineQueryData> => {
  const payload = await getPayload({ config })

  const [persons, times, events] = await Promise.all([
    payload.find({
      collection: 'person',
      locale,
      depth: 0,
      limit: 1000,
      sort: ['startYear', 'name'],
      select: {
        name: true,
        startYear: true,
        startBlurriness: true,
        endYear: true,
        endBlurriness: true,
        stillActive: true,
      },
    }),
    payload.find({
      collection: 'time',
      locale,
      depth: 0,
      limit: 1000,
      where: { startYear: { exists: true } },
      sort: ['startYear', 'name'],
      select: { name: true, startYear: true, endYear: true },
    }),
    payload.find({
      collection: 'event',
      locale,
      depth: 0,
      limit: 1000,
      where: { year: { exists: true } },
      sort: ['year', 'name'],
      select: { name: true, year: true },
    }),
  ])

  return {
    persons: persons.docs,
    times: times.docs,
    events: events.docs,
  }
}
