import type { Person } from '@/payload-types'

/**
 * Lexical editor state stored in Payload `content` fields. The shape is identical
 * across the person/time/event collections, so we alias one of them.
 */
export type RichTextContent = NonNullable<Person['content']>
