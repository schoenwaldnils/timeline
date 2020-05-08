import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import { Page } from '../../app/components/Page'
import { withLocale } from '../../app/lib/withLocale'
import { isLocale } from '../../app/utils/intl/intlConsts'
import { TimelineProps } from '../../app/components/Timeline'
import { fetchTimelineData } from '../../app/lib/fetchTimelineData'

const IndexPage: NextPage<TimelineProps> = props => {
  return <Page {...props} />
}

export const getStaticProps: GetStaticProps = async ctx => {
  if (typeof ctx.params.lang !== 'string' || !isLocale(ctx.params.lang)) {
    return { props: { locale: null } }
  }

  const data = await fetchTimelineData('timelineData', ctx.params.lang)

  return { props: { locale: ctx.params.lang, timelineData: data } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'en' } }, { params: { lang: 'de' } }],
    fallback: false,
  }
}

export default withLocale(IndexPage)
