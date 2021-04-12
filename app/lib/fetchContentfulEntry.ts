import { typeById } from '../gql/typeById'
import { request } from './graphqlRequest'

export const fetchContentfulEntry = async (
  key: unknown,
  { locale, id }: Record<string, string>,
): Promise<unknown> => {
  return request(typeById, { locale, id })
}
