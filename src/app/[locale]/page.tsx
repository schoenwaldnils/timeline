import { Locale } from '../../../i18n-config'
import { fetchTimelineData } from '@/lib/fetchTimelineData'
import { Page } from '@/components/Page'

export default async function IndexPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const timelineData = await fetchTimelineData(locale)

  return <Page timelineData={timelineData} />
}
