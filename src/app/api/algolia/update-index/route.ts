import { createClient } from 'contentful'
import { headers } from 'next/headers'

import { EntrySkeleton, getAlgoliaObject } from '@/utils/getAlgoliaObject'
import { AlgoliaError, updateAlgoliaIndex } from '@/utils/updateAlgoliaIndex'

export async function POST(req: Request) {
  const {
    entityId,
    indexName,
  }: { entityId: string; indexName: 'person' | 'timespan' | 'event' } =
    await req.json()

  const headersList = headers()
  const spaceid = headersList.get('spaceid')
  const contentfultoken = headersList.get('contentfultoken')

  if (!spaceid) {
    return Response.json(
      { error: 'Missing spaceid in header' },
      { status: 500 },
    )
  }

  if (!contentfultoken) {
    return Response.json(
      { error: 'Missing contentfultoken in header' },
      { status: 500 },
    )
  }

  if (spaceid !== process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
    return Response.json({ error: 'Wrong spaceid in header' }, { status: 500 })
  }

  if (contentfultoken !== process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN) {
    return Response.json(
      { error: 'Wrong contentfultoken in header' },
      { status: 500 },
    )
  }

  /**
   * CONTENTUFL
   */
  const clientContentful = createClient({
    space: spaceid,
    accessToken: contentfultoken,
  })

  const res = await clientContentful.withAllLocales
    .getEntries<EntrySkeleton>({
      content_type: indexName,
      'sys.id': entityId,
      select: ['sys.id', 'fields.name', 'fields.image'],
    })
    .catch((error) => {
      throw Response.json(
        {
          error,
        },
        { status: 502 },
      )
    })

  if (!res.items.length) {
    return Response.json({ error: 'No items found' }, { status: 404 })
  }

  const algoliaEntry = getAlgoliaObject(res.items[0])

  const applicationId = headersList.get('x-algolia-application-id')
  const apiKey = headersList.get('x-algolia-api-key')

  if (!applicationId) {
    return Response.json(
      {
        error: 'Missing x-algolia-application-id in header',
      },
      { status: 500 },
    )
  }

  if (!apiKey) {
    return Response.json(
      {
        error: 'Missing x-algolia-api-key in header',
      },
      { status: 500 },
    )
  }

  if (applicationId !== process.env.ALGOLIA_APPLICATION_ID) {
    return Response.json(
      {
        error: 'Wrong x-algolia-application-id in header',
      },
      { status: 500 },
    )
  }

  if (apiKey !== process.env.ALGOLIA_ADMIN_API_KEY) {
    return Response.json(
      {
        error: 'Wrong x-algolia-api-key in header',
      },
      { status: 500 },
    )
  }

  const updateRes = await updateAlgoliaIndex([algoliaEntry], {
    applicationId,
    apiKey,
    indexName,
  }).catch((error: AlgoliaError) => {
    throw Response.json(error, { status: 502 })
  })

  return Response.json(
    { message: 'Updated index', index: updateRes },
    { status: 200 },
  )
  // return Response.json(algoliaEntry, { status: 418 })
}
