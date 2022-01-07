import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '../app/components/Page'
import { ContentfulTimelineData } from '../app/js/objectFormating/formatTimelineData'
import { fetchTimelineData } from '../app/lib/fetchTimelineData'

const IndexPage: NextPage<{
  timelineData: ContentfulTimelineData
}> = ({ timelineData }) => <Page timelineData={timelineData} />

export default IndexPage

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
  preview = false,
}): Promise<
  GetStaticPropsResult<{
    preview: boolean
    timelineData: ContentfulTimelineData
  }>
> => {
  // TODO fetch preview
  const timelineData = await fetchTimelineData(locale as 'en' | 'de')

  return {
    props: {
      preview,
      timelineData,
      ...(await serverSideTranslations(locale, ['common'])),
      ...params,
    },
  }
}
