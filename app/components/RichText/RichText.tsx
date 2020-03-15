import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

import { H1, H2, H3, UL, OL, LI, P, HR } from '../Typography'
import { Link } from '../Link'

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.UL_LIST]: (node, children) => <UL>{children}</UL>,
    [BLOCKS.OL_LIST]: (node, children) => <OL>{children}</OL>,
    [BLOCKS.LIST_ITEM]: (node, children) => <LI>{children}</LI>,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (!children || (children.length === 1 && children[0] === ''))
        return null
      return <P>{children}</P>
    },
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

    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri}>{children}</Link>
    ),
  },
}

interface Props {
  content: Object
}

export const RichText: React.FC<Props> = ({ content }) => {
  return documentToReactComponents(content, options)
}
