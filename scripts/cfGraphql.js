const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { HttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');


function newContenfulGQLClient({
  baseURL = 'https://graphql.contentful.com/content/v1',
  spaceId,
  cdaToken,
}) {
  try {
    const link = new HttpLink({
      fetch,
      uri: `${baseURL}/spaces/${spaceId}`,
      headers: {
        Authorization: `Bearer ${cdaToken}`,
      },
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  } catch (error) {
    if (error.networkError) {
      console.error(error.networkError.results.errors);
    }
  }
}

const client = newContenfulGQLClient({
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  cdaToken: process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
});


async function getAllData(query) {
  try {
    const { data } = await client.query({ query });

    return data;
  } catch (error) {
    if (error.networkError) {
      console.error(error.networkError.result.errors);
    }
  }
}

module.exports = getAllData;
