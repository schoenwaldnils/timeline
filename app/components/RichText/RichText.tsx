/* eslint-disable react/display-name */
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types'
import { FC, ReactNode } from 'react'

import { A, H1, H2, H3, HR, LI, OL, P, QUOTE, UL } from '../Typography'

const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: unknown, children: ReactNode) => (
      <H1>{children}</H1>
    ),
    [BLOCKS.HEADING_2]: (node: unknown, children: ReactNode) => (
      <H2>{children}</H2>
    ),
    [BLOCKS.HEADING_3]: (node: unknown, children: ReactNode) => (
      <H3>{children}</H3>
    ),
    [BLOCKS.UL_LIST]: (node: unknown, children: ReactNode) => (
      <UL>{children}</UL>
    ),
    [BLOCKS.OL_LIST]: (node: unknown, children: ReactNode) => (
      <OL>{children}</OL>
    ),
    [BLOCKS.LIST_ITEM]: (node: unknown, children: ReactNode) => (
      <LI>{children}</LI>
    ),
    [BLOCKS.PARAGRAPH]: (node: unknown, children: ReactNode[]) => {
      if (!children || (children.length === 1 && children[0] === ''))
        return null
      return <P>{children}</P>
    },
    [BLOCKS.QUOTE]: (node: unknown, children: ReactNode) => (
      <QUOTE>{children}</QUOTE>
    ),
    [BLOCKS.HR]: () => <HR />,
    // [BLOCKS.EMBEDDED_ENTRY]: node => {
    //   const { target } = node.data
    //   const { id } = target.sys.contentType.sys

    //   const customComponents = {}

    //   switch (id) {
    //     case 'contentKomponente':
    //       return customComponents[target.fields.id]

    //     default:
    //       return null
    //   }
    // },

    [INLINES.HYPERLINK]: (node, children: ReactNode) => {
      const {
        data: { uri },
      } = node
      return <A href={uri}>{children}</A>
    },
  },
}

export const RichText: FC<{ content?: Document }> = ({ content }) => {
  if (!content) return null
  return <>{documentToReactComponents(content, options)}</>
}
