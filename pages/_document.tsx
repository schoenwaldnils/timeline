import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ReactNode } from 'react'

import { Meta } from '../app/components/Meta'

const TimelineDocument = (): ReactNode => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

        <Meta />

        <link rel="preconnect" href="https://graphql.contentful.com" />
        <link rel="preconnect" href="https://p7r800rwy1-dsn.algolia.net" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

TimelineDocument.getInitialProps = Document.getInitialProps

export default TimelineDocument
