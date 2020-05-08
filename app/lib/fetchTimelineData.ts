import timelineCollection from '../gql/timelineCollection'
import { request } from './graphqlRequest'

export const fetchTimelineData = async (key, locale) => {
  return request(timelineCollection, { locale })
}
