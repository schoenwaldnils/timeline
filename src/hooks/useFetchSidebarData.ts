import {
  ApolloError,
  ApolloQueryResult,
  DocumentNode,
  gql,
  OperationVariables,
  useSuspenseQuery,
} from '@apollo/client'
import { useLocale } from 'next-intl'

import { AlgoliaIndex } from '@/@types/algolia.d'
import { Data, FormatedData } from '@/@types/Data'
import eventQuery from '@/components/Content/event.gql'
import eventFragment from '@/components/Content/eventFragment.gql'
import personQuery from '@/components/Content/person.gql'
import personFragment from '@/components/Content/personFragment.gql'
import timeQuery from '@/components/Content/time.gql'
import timeFragment from '@/components/Content/timeFragment.gql'
import { formatData } from '@/utils/objectFormating/formatData'

const queries = {
  person: personQuery,
  event: eventQuery,
  time: timeQuery,
} satisfies Record<AlgoliaIndex, DocumentNode>

const fragments = {
  person: personFragment,
  event: eventFragment,
  time: timeFragment,
} satisfies Record<AlgoliaIndex, DocumentNode>

export const useFetchSidebarData = <T extends AlgoliaIndex>({
  type,
  id,
}: {
  type: T
  id: string
}): {
  data: FormatedData<T> | null
  error?: ApolloError
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Data<T>>>
} => {
  const locale = useLocale()

  const query = gql`
    ${type && queries[type]}
    ${type && fragments[type]}
  `

  const { data, error, refetch } = useSuspenseQuery<Data<T>>(query, {
    variables: { locale, type, id },
  })

  if (error) {
    console.error(error)
  }

  return {
    data: data ? formatData(type, data[type]) : null,
    error,
    refetch,
  }
}
