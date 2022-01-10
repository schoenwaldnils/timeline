import timelineCollection from '@/gql/timelineCollection'
import { ContentfulTimelineData } from '@/js/objectFormating/formatTimelineData'

import { request } from './graphqlRequest'

export const fetchTimelineData = async (
  locale: 'en' | 'de',
): Promise<ContentfulTimelineData> => {
  return request(timelineCollection, {
    locale,
  }) as Promise<ContentfulTimelineData>
}
