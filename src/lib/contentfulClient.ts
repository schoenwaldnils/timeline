import { createClient } from 'contentful'

export const contentfulClient = () => {
  const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  const TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN

  if (!SPACE_ID || !TOKEN) {
    throw new Error('Contentful space ID and token are required')
  }

  return createClient({
    space: SPACE_ID,
    accessToken: TOKEN,
  })
}
