import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { Meta } from '../app/components/Meta'
import translations from '../app/data/translations'

export default class MyDocument extends Document {
  render() {
    const locale = this.props?.__NEXT_DATA__?.props?.pageProps?.locale || 'en'
    const description = translations.meta.description[locale]

    return (
      <html lang={locale}>
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            name="viewport"
            content="height=device-height, initial-scale=1, minimum-scale=1"
          />

          <Meta description={description} />

          <link rel="preconnect" href="https://graphql.contentful.com" />
          <link rel="preconnect" href="https://p7r800rwy1-dsn.algolia.net" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
