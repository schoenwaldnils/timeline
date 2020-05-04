import { GraphQLClient } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'
import unfetch from 'isomorphic-unfetch'

import { CONTENTFUL_SPACE_ID } from '../data/constants'

let graphQLClient = null

function create(initialState = {}) {
  const token =
    '8a320342ff838c8f3e85fdc93d40ae562ecc1d65744737c2b63624ef12d4b4a3'

  return new GraphQLClient({
    ssrMode: typeof window === 'undefined',
    url: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: memCache({ initialState }),
    fetch: typeof window !== 'undefined' ? fetch.bind(window) : unfetch,
  })
}

export const initGraphql = (initialState = {}) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!graphQLClient) {
    graphQLClient = create(initialState)
  }

  return graphQLClient
}
