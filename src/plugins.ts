import { Plugin } from 'payload'

// Algolia search indexing is wired via collection afterChange/afterDelete hooks
// (see src/collections/hooks/algolia.ts) rather than a plugin.
export const plugins: Plugin[] = []
