import React, { ReactNode } from 'react'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types'

import { H1, H2, H3, UL, OL, LI, P, HR, A, QUOTE } from '../Typography'

const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: ReactNode) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node: any, children: ReactNode) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => <H3>{children}</H3>,
    [BLOCKS.UL_LIST]: (node: any, children: ReactNode) => <UL>{children}</UL>,
    [BLOCKS.OL_LIST]: (node: any, children: ReactNode) => <OL>{children}</OL>,
    [BLOCKS.LIST_ITEM]: (node: any, children: ReactNode) => <LI>{children}</LI>,
    [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode[]) => {
      if (!children || (children.length === 1 && children[0] === ''))
        return null
      return <P>{children}</P>
    },
    [BLOCKS.QUOTE]: (node: any, children: ReactNode) => (
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

export const RichText = ({ content }: { content?: Document }) => {
  return <>{documentToReactComponents(content, options)}</>
}
