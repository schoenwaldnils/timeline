import { gql } from '@apollo/client'

import timelineCollection from '@/gql/timelineCollection'
import { ContentfulTimelineData } from '@/utils/objectFormating/formatTimelineData'

import { Locale } from '../../i18n-config'
import { getClient } from './gqlClient'

export const fetchTimelineData = async (
  locale: Locale,
): Promise<ContentfulTimelineData> => {
  const query = gql`
    ${timelineCollection}
  `

  const res = await getClient()
    .query<ContentfulTimelineData>({
      query,
      variables: { locale },
    })
    .catch((e) => {
      throw new Error(e)
    })

  return res?.data
}
