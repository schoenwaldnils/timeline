import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { Loading } from '../Loading'
import { ContentfulPerson } from './ContentfulPerson'
import { ContentfulTime } from './ContentfulTime'
import { ContentfulEvent } from './ContentfulEvent'

import { typeById } from './gql/typeById'

interface Props {
  id: string
}

export const ContentfulContent: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useQuery(typeById, {
    variables: { id },
  })

  if (loading) return <Loading />
  if (error) return <div>Error! ${error}</div>

  const [type] = Object.keys(data).filter(
    key => data[key].items.length === 1 && key,
  )

  switch (type) {
    case 'person':
      return <ContentfulPerson id={id} />

    case 'time':
      return <ContentfulTime id={id} />

    case 'event':
      return <ContentfulEvent id={id} />

    default:
      return null
  }
}
