import React, { useEffect } from 'react'
import Head from 'next/head'
import { getInitialLocale } from '../app/utils/intl/getInitialLocale'

const Index: React.FC = () => {
  useEffect(() => {
    window.location.href = `${window.location.origin}/${getInitialLocale()}/`
  })

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default Index
