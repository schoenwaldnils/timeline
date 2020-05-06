import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import Head from 'next/head'
import { Page } from '../../app/components/Page'
import { withLocale } from '../../app/lib/withLocale'
import { isLocale } from '../../app/utils/intl/intlConsts'
import { Meta } from '../../app/components/Meta'
import { useTranslation } from '../../app/hooks/useTranslation'

const IndexPage: NextPage = props => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <Meta description={t('meta.description')} />
      </Head>
      <Page {...props} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  if (typeof ctx.params.lang !== 'string' || !isLocale(ctx.params.lang)) {
    return { props: { locale: null } }
  }
  return { props: { locale: ctx.params.lang } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'en' } }, { params: { lang: 'de' } }],
    fallback: false,
  }
}

export default withLocale(IndexPage)
