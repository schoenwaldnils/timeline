import timelineCollection from '../gql/timelineCollection'
import { request } from './graphqlRequest'

export const fetchTimelineData = async (locale: 'en' | 'de') => {
  return request(timelineCollection, { locale })
}
