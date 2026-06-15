import { postgresAdapter } from '@payloadcms/db-postgres'
import { Config } from 'payload'

/**
 * The SSL modes `prefer`, `require`, and `verify-ca` are currently treated by
 * pg-connection-string as aliases for `verify-full`, but that alias is being
 * removed in pg v9 / pg-connection-string v3 (where they would silently adopt
 * weaker libpq semantics). Neon ships connection strings with `sslmode=require`,
 * so we pin those modes to the value pg resolves them to today — keeping the
 * exact current behavior and silencing the build-time deprecation warning.
 * Connections without an sslmode (e.g. the local Docker Postgres) are left as-is.
 */
const pinSslMode = (connectionString: string): string => {
  if (!connectionString.includes('?')) return connectionString
  const [base, query] = connectionString.split('?')
  const params = new URLSearchParams(query)
  const mode = params.get('sslmode')
  if (mode && ['prefer', 'require', 'verify-ca'].includes(mode)) {
    params.set('sslmode', 'verify-full')
    return `${base}?${params.toString()}`
  }
  return connectionString
}

export const db: Config['db'] = postgresAdapter({
  pool: {
    connectionString: pinSslMode(process.env.POSTGRES_URL || ''),
  },
})
