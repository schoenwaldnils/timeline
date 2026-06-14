import { postgresAdapter } from '@payloadcms/db-postgres'
import { Config } from 'payload'

export const db: Config['db'] = postgresAdapter({
  pool: {
    connectionString: process.env.POSTGRES_URL || '',
  },
})
