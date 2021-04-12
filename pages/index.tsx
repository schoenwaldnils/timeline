import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'

import { Page } from '../app/components/Page'
import { ContentfulTimelineData } from '../app/js/objectFormating/formatTimelineData'
import { fetchTimelineData } from '../app/lib/fetchTimelineData'

const IndexPage: NextPage<{
  timelineData: { en: ContentfulTimelineData; de: ContentfulTimelineData }
}> = ({ timelineData }) => <Page timelineData={timelineData} />

export default IndexPage

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}): Promise<
  GetStaticPropsResult<{
    preview: boolean
    timelineData: {
      en: ContentfulTimelineData
      de: ContentfulTimelineData
    }
  }>
> => {
  // TODO fetch preview
  const dataEn = await fetchTimelineData('en')
  const dataDe = await fetchTimelineData('de')

  return {
    props: {
      preview,
      timelineData: {
        en: dataEn || null,
        de: dataDe || null,
      },
      ...params,
    },
  }
}
