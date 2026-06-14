import type { CollectionConfig } from 'payload'

import { algoliaAfterChange, algoliaAfterDelete } from './hooks/algolia'

export const configEvent: CollectionConfig<'event'> = {
  slug: 'event',
  labels: {
    singular: 'Event',
    plural: 'Events',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'year'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [algoliaAfterChange],
    afterDelete: [algoliaAfterDelete],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Name of the event',
      },
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      admin: {
        description: 'Year when the event occurred (negative for BCE)',
      },
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
      admin: {
        description: 'Associated image for the event',
      },
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      admin: {
        description: 'Rich text content about the event',
      },
    },
    {
      name: 'wolLink',
      type: 'text',
      admin: {
        description: 'External reference link (e.g., to Watchtower Online Library)',
      },
    },
  ],
}
