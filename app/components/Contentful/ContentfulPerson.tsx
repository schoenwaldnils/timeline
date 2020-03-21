import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ContextLang } from '../ContextLang'
import { Loading } from '../Loading'
import { ContentPerson } from '../Content/ContentPerson'
import { formatPerson } from './formatData'

import personById from './gql/personById'

interface Props {
  id: string
}

export const ContentfulPerson: React.FC<Props> = ({ id }) => {
  const { language } = useContext(ContextLang)

  const { loading, error, data } = useQuery(personById, {
    variables: { id, locale: language },
  })

  if (loading) return <Loading />
  if (error || data.personCollection.items[0].length < 1)
    return <div>Error!</div>

  const cleanedPerson = formatPerson(data.personCollection.items[0])

  return <ContentPerson {...cleanedPerson} />
}
