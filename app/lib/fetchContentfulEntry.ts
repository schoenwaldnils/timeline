import { request } from './graphqlRequest'
import { typeById } from '../gql/typeById'

export const fetchContentfulEntry = async (key, { locale, id }) => {
  return request(typeById, { locale, id })
}
