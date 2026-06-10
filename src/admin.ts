import path from 'path'
import { Config } from 'payload'
import { fileURLToPath } from 'url'

import { configUser } from './collections/configUser'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const admin: Config['admin'] = {
  components: {
    // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
    beforeLogin: ['@/app/(payload)/components/BeforeLogin'],
    // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
    beforeDashboard: ['@/app/(payload)/components/BeforeDashboard'],
  },
  importMap: {
    baseDir: path.resolve(dirname),
  },
  user: configUser.slug,
  livePreview: {
    breakpoints: [
      {
        label: 'TV',
        name: 'tv',
        width: 1080,
        height: 1920,
      },
    ],
  },
}
