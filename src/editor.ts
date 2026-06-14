import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Config } from 'payload'

export const editor: Config['editor'] = lexicalEditor({
  features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
})
