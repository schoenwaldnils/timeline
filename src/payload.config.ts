import { de } from '@payloadcms/translations/languages/de'
import { en } from '@payloadcms/translations/languages/en'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { admin } from './admin'
import { collections } from './collections/index'
import { db } from './db'
import { editor } from './editor'
import { jobs } from './jobs'
import { localization } from './localization'
import { plugins } from './plugins'
import { getServerSideURL } from './utils/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  i18n: {
    // payload admin UI language
    supportedLanguages: { en, de },
    fallbackLanguage: 'de',
  },
  admin,
  collections,
  editor,
  db,
  jobs,
  localization,
  plugins,
  cors: [getServerSideURL()].filter(Boolean),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
