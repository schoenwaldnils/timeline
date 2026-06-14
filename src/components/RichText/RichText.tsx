import {
  type JSXConvertersFunction,
  RichText as PayloadRichText,
} from '@payloadcms/richtext-lexical/react'

import type { RichTextContent } from '@/@types/RichText.d'
import { A, H1, H2, H3, HR, LI, OL, P, QUOTE, UL } from '@/components/Typography'

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children })
    switch (node.tag) {
      case 'h1':
        return <H1>{children}</H1>
      case 'h2':
        return <H2>{children}</H2>
      default:
        return <H3>{children}</H3>
    }
  },
  paragraph: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children })
    if (!children.length) return null
    return <P>{children}</P>
  },
  quote: ({ node, nodesToJSX }) => <QUOTE>{nodesToJSX({ nodes: node.children })}</QUOTE>,
  horizontalrule: () => <HR />,
  list: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children })
    return node.listType === 'number' ? <OL>{children}</OL> : <UL>{children}</UL>
  },
  listitem: ({ node, nodesToJSX }) => <LI>{nodesToJSX({ nodes: node.children })}</LI>,
  link: ({ node, nodesToJSX }) => (
    <A href={node.fields?.url ?? '#'}>{nodesToJSX({ nodes: node.children })}</A>
  ),
  autolink: ({ node, nodesToJSX }) => (
    <A href={node.fields?.url ?? '#'}>{nodesToJSX({ nodes: node.children })}</A>
  ),
})

export const RichText = ({ content }: { content?: RichTextContent }) => {
  if (!content) return null
  return <PayloadRichText converters={converters} data={content} disableContainer />
}
