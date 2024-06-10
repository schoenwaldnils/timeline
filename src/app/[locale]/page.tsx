import { Page } from '@/components/Page'
import { fetchTimelineData } from '@/lib/fetchTimelineData'

import { Locale } from '../../../i18n-config'

export default async function IndexPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const timelineData = await fetchTimelineData(locale)

  return <Page timelineData={timelineData} />
}
