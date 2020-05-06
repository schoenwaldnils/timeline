import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            name="viewport"
            content="height=device-height, initial-scale=1, minimum-scale=1"
          />

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
