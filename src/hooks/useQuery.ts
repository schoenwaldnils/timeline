import { DocumentNode, SuspenseQueryHookOptions } from '@apollo/client'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { useLocale } from 'next-intl'

export const useQuery = async (
  query: DocumentNode,
  options: SuspenseQueryHookOptions = {},
) => {
  const locale = useLocale()
  return useSuspenseQuery(query, {
    ...options,
    variables: { ...options.variables, locale },
  })
}
