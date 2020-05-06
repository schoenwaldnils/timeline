import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { getInitialLocale } from '../app/utils/intl/getInitialLocale'

const Index: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/[lang]', `/${getInitialLocale()}`)
  })

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default Index
