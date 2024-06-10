export const fetchGraphQL = async (
  query: string,
  preview = false,
): Promise<unknown> => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }

      console.error(query)
      throw new Error()
    })
    .catch((err) => {
      console.error(err)
    })
}
