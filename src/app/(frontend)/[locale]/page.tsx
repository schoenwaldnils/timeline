import { getLocale } from 'next-intl/server'

import { Page } from '@/components/Page'
import { fetchTimelineData } from '@/lib/fetchTimelineData'

export default async function IndexPage() {
  const locale = await getLocale()
  const timelineData = await fetchTimelineData(locale)

  return <Page timelineData={timelineData} />
}
