import { BLOCKS, Document } from '@contentful/rich-text-types'

export const richText: Document = {
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.HEADING_1,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'Heading1',
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value: 'Lorem',
          marks: [],
          data: {},
        },
        {
          nodeType: 'text',
          value: ' ipsum dolor',
          marks: [
            {
              type: 'italic',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value: ' sit ',
          marks: [],
          data: {},
        },
        {
          nodeType: 'text',
          value: 'amet',
          marks: [
            {
              type: 'bold',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value: ' consectetur ',
          marks: [],
          data: {},
        },
        {
          nodeType: 'text',
          value: 'adipisicing',
          marks: [
            {
              type: 'underline',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value:
            ' elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. Aliquam, itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.UL_LIST,
      content: [
        {
          nodeType: BLOCKS.LIST_ITEM,
          data: {},
          content: [
            {
              nodeType: BLOCKS.PARAGRAPH,
              content: [
                {
                  nodeType: 'text',
                  value: 'Lorem',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
        },
        {
          nodeType: BLOCKS.LIST_ITEM,
          content: [
            {
              nodeType: BLOCKS.PARAGRAPH,
              content: [
                {
                  nodeType: 'text',
                  value: 'Ipsum',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
          data: {},
        },
        {
          nodeType: BLOCKS.LIST_ITEM,
          content: [
            {
              nodeType: BLOCKS.PARAGRAPH,
              content: [
                {
                  nodeType: 'text',
                  value: 'Dolor',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
            {
              nodeType: BLOCKS.UL_LIST,
              content: [
                {
                  nodeType: BLOCKS.LIST_ITEM,
                  content: [
                    {
                      nodeType: BLOCKS.PARAGRAPH,
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Sit',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: BLOCKS.LIST_ITEM,
                  content: [
                    {
                      nodeType: BLOCKS.PARAGRAPH,
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Amet',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
              data: {},
            },
          ],
          data: {},
        },
        {
          nodeType: BLOCKS.LIST_ITEM,
          content: [
            {
              nodeType: BLOCKS.PARAGRAPH,
              content: [
                {
                  nodeType: 'text',
                  value: 'Modi',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. Aliquam, itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.OL_LIST,
      content: [
        {
          nodeType: BLOCKS.LIST_ITEM,
          data: {},
          content: [
            {
              nodeType: BLOCKS.PARAGRAPH,
              content: [
                {
                  nodeType: 'text',
                  value: 'Lorem',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
        },
        {
          nodeType: BLOCKS.LIST_ITEM,
          content: [
            {
              nodeType: BLOCKS.PARAGRAPH,
              content: [
                {
                  nodeType: 'text',
                  value: 'Ipsum',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
            {
              nodeType: BLOCKS.OL_LIST,
              content: [
                {
                  nodeType: BLOCKS.LIST_ITEM,
                  content: [
                    {
                      nodeType: BLOCKS.PARAGRAPH,
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Dolor',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: BLOCKS.OL_LIST,
                      content: [
                        {
                          nodeType: BLOCKS.LIST_ITEM,
                          content: [
                            {
                              nodeType: BLOCKS.PARAGRAPH,
                              content: [
                                {
                                  nodeType: 'text',
                                  value: 'Sit',
                                  marks: [],
                                  data: {},
                                },
                              ],
                              data: {},
                            },
                            {
                              nodeType: BLOCKS.OL_LIST,
                              content: [
                                {
                                  nodeType: BLOCKS.LIST_ITEM,
                                  content: [
                                    {
                                      nodeType: BLOCKS.PARAGRAPH,
                                      content: [
                                        {
                                          nodeType: 'text',
                                          value: 'Amet',
                                          marks: [],
                                          data: {},
                                        },
                                      ],
                                      data: {},
                                    },
                                  ],
                                  data: {},
                                },
                              ],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
              data: {},
            },
          ],
          data: {},
        },
        {
          nodeType: BLOCKS.LIST_ITEM,
          content: [
            {
              nodeType: BLOCKS.PARAGRAPH,
              content: [
                {
                  nodeType: 'text',
                  value: 'Modi',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. Aliquam, itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.QUOTE,
      content: [
        {
          nodeType: BLOCKS.PARAGRAPH,
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              marks: [],
              data: {},
            },
          ],
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. Aliquam, itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.HR,
      content: [],
      data: {},
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. ',
          marks: [],
          data: {},
        },
        {
          nodeType: 'text',
          value: 'Aliquam',
          marks: [
            {
              type: 'code',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value: ', itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value: "<Query query={personById} variables={{ id, locale: 'de' }}>",
          marks: [
            {
              type: 'code',
            },
          ],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. Aliquam, itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.EMBEDDED_ASSET,
      content: [],
      data: {
        target: {
          sys: {
            id: '7QNjYQCgQ8qaaikGqm2eG',
            type: 'Link',
            linkType: 'Asset',
          },
        },
      },
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. Aliquam, itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.HEADING_2,
      content: [
        {
          nodeType: 'text',
          value: 'Heading2',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. Aliquam, itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.HEADING_3,
      content: [
        {
          nodeType: 'text',
          value: 'Heading3',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque? Odio dolorem, possimus nostrum velit suscipit non dolor. Quidem placeat veniam commodi! Hic facilis fugiat possimus aliquid. Aliquam, itaque omnis!',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
  ],
}
