import { gql } from '@apollo/client'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { useLocale } from 'next-intl'

import { typeById } from '@/gql/typeById'

export const useContentfulEntry = async (id?: string) => {
  const locale = useLocale()
  return useSuspenseQuery(
    gql`
      ${typeById}
    `,
    { variables: { id, locale }, skip: !id || !locale },
  )
}
