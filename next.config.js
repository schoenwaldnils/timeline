import { withPayload } from '@payloadcms/next/withPayload'
import withNextIntl from 'next-intl/plugin'

import sharedConfig from './webpack.sharedConfig.js'

/**
 * SVGR options shared by the Turbopack rule below and the webpack fallback.
 * `exportType: 'named'` keeps the `import { ReactComponent as X } from './x.svg'`
 * convention used across the app.
 */
const svgrOptions = {
  exportType: 'named',
  namedExport: 'ReactComponent',
  memo: true,
  replaceAttrValues: {
    '#000000': 'currentColor',
    '#000': 'currentColor',
  },
  svgoConfig: {
    multipass: true,
    plugins: [
      { name: 'removeViewBox', active: false },
      'removeDimensions',
      { name: 'cleanupNumericValues', params: { floatPrecision: 2 } },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ preserveAspectRatio: 'xMinYMid meet' }, { height: '1em' }],
        },
      },
    ],
  },
}

/** @type {import('next').NextConfig} */
export default withPayload(
  withNextIntl('./src/utils/i18n.ts')({
    reactStrictMode: true,
    webpack: sharedConfig,
    turbopack: {
      rules: {
        '*.svg': {
          loaders: [{ loader: '@svgr/webpack', options: svgrOptions }],
          as: '*.js',
        },
      },
    },
    // Expose the search-only Algolia credentials to the browser InstantSearch
    // client, reusing the server-side env vars (the search key is public-safe).
    env: {
      NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.ALGOLIA_APPLICATION_ID ?? '',
      NEXT_PUBLIC_ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_API_KEY ?? '',
    },
  }),
)
