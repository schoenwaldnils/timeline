import fetch from 'node-fetch'
import ApolloClient from 'apollo-boost'

import { CONTENTFUL_SPACE_ID } from '../data/constants'

const IS_PREVIEW = true

const token = IS_PREVIEW
  ? 'df2705e9cf108c10c02de85143f177f730451f799984688cf5beffe98ae1896e'
  : '8a320342ff838c8f3e85fdc93d40ae562ecc1d65744737c2b63624ef12d4b4a3'

function newContenfulGQLClient({
  baseURL = 'https://graphql.contentful.com/content/v1',
  spaceId,
  cdaToken,
}) {
  try {
    return new ApolloClient({
      fetch,
      uri: `${baseURL}/spaces/${spaceId}`,
      headers: {
        Authorization: `Bearer ${cdaToken}`,
      },
    })
  } catch (error) {
    if (error.networkError) {
      console.error(error.networkError.results.errors)
    }
    throw new Error(error)
  }
}

export const client = newContenfulGQLClient({
  spaceId: CONTENTFUL_SPACE_ID,
  cdaToken: token,
})

export async function getData(query: any) {
  try {
    const { data } = await client.query({ query })

    return data
  } catch (error) {
    if (error.networkError) {
      console.error(
        error.networkError.result
          ? error.networkError.result.errors
          : error.networkError,
      )
    }
    throw new Error(error)
  }
}
