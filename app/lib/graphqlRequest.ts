import 'cross-fetch/polyfill'

import { GraphQLClient } from 'graphql-request'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
})

export const request = async (
  query: string,
  variables: Record<string, string>,
): Promise<unknown> => {
  return client.request(query, variables)
}
