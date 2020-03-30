import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ContextLang } from '../ContextLang'

import { parentById } from './gql/parentById'

interface Props {
  id: string
}

export const ContentfulParent: React.FC<Props> = ({ id }) => {
  const { language } = useContext(ContextLang)

  const { loading, error, data } = useQuery(parentById, {
    variables: { id, locale: language },
  })

  if (loading) return null
  if (
    error ||
    !data.personCollection.items[0] ||
    data.personCollection.items[0].length < 1
  ) {
    return null
  }

  return <>{data.personCollection.items[0].name}</>
}
