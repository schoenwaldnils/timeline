import type { CollectionConfig } from 'payload'

import { algoliaAfterChange, algoliaAfterDelete } from './hooks/algolia'

export const configTime: CollectionConfig<'time'> = {
  slug: 'time',
  labels: {
    singular: 'Time Period',
    plural: 'Time Periods',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'startYear', 'endYear'],
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
        description: 'Name of the time period',
      },
    },
    {
      name: 'startYear',
      type: 'number',
      required: true,
      admin: {
        description: 'Start year of the time period (negative for BCE)',
      },
    },
    {
      name: 'endYear',
      type: 'number',
      admin: {
        description:
          'End year of the time period (negative for BCE). Optional — open-ended periods (e.g. covenants) have no end.',
      },
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
      admin: {
        description: 'Associated image for the time period',
      },
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      admin: {
        description: 'Rich text content about the time period',
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
