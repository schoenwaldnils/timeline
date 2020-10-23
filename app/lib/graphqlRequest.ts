import { GraphQLClient } from 'graphql-request'
import 'cross-fetch/polyfill'

import { CONTENTFUL_SPACE_ID } from '../data/constants'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`
const token = '8a320342ff838c8f3e85fdc93d40ae562ecc1d65744737c2b63624ef12d4b4a3'

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export const request = async (query: string, variables) => {
  console.log({ variables })
  return client.request(query, variables)
}
