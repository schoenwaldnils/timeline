/**
 * Validates that required database environment variables are present
 */
export function validateDatabaseConfig(): void {
  const requiredVars = ['POSTGRES_URL']

  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`)
    }
  }
}

/**
 * Database configuration for Payload CMS using Vercel Postgres
 */
export const databaseConfig = {
  connectionString: process.env.POSTGRES_URL,
  pool: {
    connectionTimeoutMillis: 5000,
  },
}
