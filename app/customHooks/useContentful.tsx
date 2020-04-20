import { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ContextLang } from '../components/ContextLang'

import eventById from '../gql/eventById'
import { personById } from '../gql/personById'
import timeById from '../gql/timeById'
import { parentById } from '../gql/parentById'

export const useContentful = (
  id: string,
  type: 'person' | 'time' | 'event' | 'parent',
) => {
  const { language } = useContext(ContextLang)
  const queries = {
    person: personById,
    time: timeById,
    event: eventById,
    parent: parentById,
  }

  return useQuery(queries[type], {
    variables: { id, locale: language },
  })
}
