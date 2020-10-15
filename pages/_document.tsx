import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { Meta } from '../app/components/Meta'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            name="viewport"
            content="height=device-height, initial-scale=1, minimum-scale=1"
          />

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
}
