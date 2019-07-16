const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { HttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');

const {
  contentful: {
    space,
    accessToken,
  },
} = require('../../config.json');


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
  spaceId: space,
  cdaToken: accessToken,
});


async function getData(query) {
  try {
    const { data } = await client.query({ query });

    return data;
  } catch (error) {
    if (error.networkError) {
      console.error(error.networkError.result ? error.networkError.result.errors : error.networkError);
    }
  }
}

module.exports = getData;
