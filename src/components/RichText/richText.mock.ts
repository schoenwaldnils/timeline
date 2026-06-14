import type { RichTextContent } from '@/@types/RichText.d'

const text = (value: string, format = 0) => ({
  type: 'text',
  detail: 0,
  format,
  mode: 'normal',
  style: '',
  text: value,
  version: 1,
})

const paragraph = (...children: ReturnType<typeof text>[]) => ({
  type: 'paragraph',
  children,
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  version: 1,
  textFormat: 0,
})

const heading = (tag: 'h1' | 'h2' | 'h3', value: string) => ({
  type: 'heading',
  tag,
  children: [text(value)],
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  version: 1,
})

const listItem = (value: string) => ({
  type: 'listitem',
  children: [text(value)],
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  version: 1,
  value: 1,
})

const list = (listType: 'bullet' | 'number', ...values: string[]) => ({
  type: 'list',
  listType,
  start: 1,
  tag: listType === 'number' ? 'ol' : 'ul',
  children: values.map(listItem),
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  version: 1,
})

const LOREM =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor.'

export const richText: RichTextContent = {
  root: {
    type: 'root',
    children: [
      heading('h1', 'Heading1'),
      paragraph(text('Lorem'), text(' ipsum dolor', 2), text(' sit '), text('amet', 1)),
      list('bullet', 'Lorem', 'Ipsum', 'Dolor'),
      paragraph(text(LOREM)),
      list('number', 'Lorem', 'Ipsum', 'Dolor'),
      {
        type: 'quote',
        children: [text('Lorem ipsum dolor sit amet consectetur adipisicing elit.')],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
      { type: 'horizontalrule', version: 1 },
      heading('h2', 'Heading2'),
      paragraph(text(LOREM)),
      heading('h3', 'Heading3'),
      paragraph(text(LOREM)),
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
}
