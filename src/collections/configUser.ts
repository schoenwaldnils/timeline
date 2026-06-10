import type { CollectionConfig } from 'payload'

export const configUser: CollectionConfig<'users'> = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  fields: [
    // Email added by default
    // Add additional fields as needed
  ],
}
