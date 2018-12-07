import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';


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
      console.error(error.networkError.result ? error.networkError.result.errors : error.networkError);
    }
  }
}

export default getAllData;
