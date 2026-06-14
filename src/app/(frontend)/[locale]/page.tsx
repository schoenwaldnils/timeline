import { Page } from '@/components/Page'
import { Locale } from '@/i18n-config'
import { fetchTimelineData } from '@/lib/fetchTimelineData'

export default async function IndexPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const timelineData = await fetchTimelineData(locale)

  return <Page timelineData={timelineData} />
}
