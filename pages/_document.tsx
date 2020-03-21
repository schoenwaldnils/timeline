import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { Meta } from '../app/components/Meta/Meta'

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
          <Meta />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
