import createCache from '@emotion/cache'
import createEmotionServer from '@emotion/server/create-instance'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { Children, ReactNode } from 'react'

import { Meta } from '@/components/Meta'

export const cache = createCache({
  key: 'pwa-template',
})

const { extractCritical } = createEmotionServer(cache)

const AppDocument = (): ReactNode => (
  <Html>
    <Head>
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

AppDocument.getInitialProps = async (
  ctx: DocumentContext,
): Promise<DocumentInitialProps> => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.

  try {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: [
        ...Children.toArray(initialProps.styles),
        <style
          key="emotion"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(' ')}
        />,
      ],
    }
  } catch (error: unknown) {
    console.error('Error in _document.tsx: ', error)
  }
}

export default AppDocument
