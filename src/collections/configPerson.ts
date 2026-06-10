import type {
  CollectionConfig,
  NumberFieldSingleValidation,
  RelationshipFieldManyValidation,
} from 'payload'

import { algoliaAfterChange, algoliaAfterDelete } from './hooks/algolia'

const validateStartYear: NumberFieldSingleValidation = (value, { data }) => {
  const endYear = (data as { endYear?: number | null })?.endYear
  if (typeof value === 'number' && typeof endYear === 'number' && value > endYear) {
    return 'Start year cannot be after end year'
  }
  return true
}

const validateEndYear: NumberFieldSingleValidation = (value, { data }) => {
  const startYear = (data as { startYear?: number | null })?.startYear
  if (typeof value === 'number' && typeof startYear === 'number' && value < startYear) {
    return 'End year cannot be before start year'
  }
  return true
}

// Relationship values come back as a bare id for single-collection relations,
// or as a { relationTo, value } object for polymorphic ones. Normalize to the id.
const toRelationId = (relation: unknown): number | string | null => {
  if (relation == null) return null
  if (typeof relation === 'object') {
    const value = (relation as { value?: unknown }).value
    return typeof value === 'number' || typeof value === 'string' ? value : null
  }
  return typeof relation === 'number' || typeof relation === 'string' ? relation : null
}

const validateSpouse: RelationshipFieldManyValidation = (value, { data }) => {
  const id = (data as { id?: number | string })?.id
  if (Array.isArray(value) && id != null && value.some((spouse) => toRelationId(spouse) === id)) {
    return 'A person cannot be their own spouse'
  }
  return true
}

const validateChildren: RelationshipFieldManyValidation = (value, { data }) => {
  const id = (data as { id?: number | string })?.id
  if (Array.isArray(value) && id != null && value.some((child) => toRelationId(child) === id)) {
    return 'A person cannot be their own child'
  }
  return true
}

export const configPerson: CollectionConfig<'person'> = {
  slug: 'person',
  labels: {
    singular: 'Person',
    plural: 'Persons',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'gender', 'startYear', 'endYear'],
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
        description: 'The name of the person',
      },
    },
    {
      name: 'gender',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ],
      admin: {
        description: 'Gender of the person',
      },
    },
    {
      name: 'stillActive',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether the person is still active/alive',
      },
    },
    {
      name: 'startYear',
      type: 'number',
      admin: {
        description: 'Year the person was born (negative for BCE)',
      },
      validate: validateStartYear,
    },
    {
      name: 'endYear',
      type: 'number',
      admin: {
        description: 'Year the person died (negative for BCE)',
      },
      validate: validateEndYear,
    },
    {
      name: 'startBlurriness',
      type: 'number',
      min: 0,
      defaultValue: 0,
      admin: {
        description: 'Uncertainty for the birth date, in years (gradient blur width)',
      },
    },
    {
      name: 'endBlurriness',
      type: 'number',
      min: 0,
      defaultValue: 0,
      admin: {
        description: 'Uncertainty for the death date, in years (gradient blur width)',
      },
    },
    {
      name: 'spouse',
      type: 'relationship',
      relationTo: 'person',
      hasMany: true,
      admin: {
        description: 'Spouse relationship(s)',
      },
      validate: validateSpouse,
    },
    {
      name: 'children',
      type: 'relationship',
      relationTo: 'person',
      hasMany: true,
      admin: {
        description: 'Children relationships',
      },
      validate: validateChildren,
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
      admin: {
        description: 'Associated image',
      },
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      admin: {
        description: 'Rich text content about the person',
      },
    },
    {
      name: 'wolLink',
      type: 'text',
      admin: {
        description: 'External reference link (Watchtower Online Library)',
      },
    },
  ],
}
