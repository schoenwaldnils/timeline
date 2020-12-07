import { request } from './graphqlRequest'
import { typeById } from './gql/typeById'

export const fetchContentfulEntry = async (
  key: any,
  { locale, id }: { locale: string; id: string },
) => {
  return request(typeById, { locale, id })
}
