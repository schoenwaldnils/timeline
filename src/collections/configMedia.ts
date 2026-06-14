import type { CollectionConfig } from 'payload'

export const configMedia: CollectionConfig<'media'> = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'filename', 'mimeType'],
    group: 'Media',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 150,
        height: 150,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
      },
      {
        name: 'card',
        width: 400,
        height: 300,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 85,
          },
        },
      },
      {
        name: 'tablet',
        width: 768,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 90,
          },
        },
      },
      {
        name: 'desktop',
        width: 1200,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 90,
          },
        },
      },
    ],
    adminThumbnail: 'thumbnail',
    focalPoint: false,
    crop: false,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Alternative text for accessibility',
      },
    },
  ],
}
