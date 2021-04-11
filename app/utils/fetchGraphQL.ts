export const fetchGraphQL = async (
  query: string,
  preview = false,
): Promise<unknown> => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  )
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }

      console.error(query)
      throw new Error()
    })
    .catch(err => {
      console.error(err)
    })
}
