import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { Loading, LoadingDots } from '../Loading'
import { ContentPerson, ContentTime, ContentEvent } from '../Content'
import { ContextLang } from '../ContextLang'

import { typeById } from '../../gql/typeById'
import {
  formatPerson,
  formatParent,
  formatTime,
  formatEvent,
} from '../../js/objectFormating/formatData'

const contentfulFunctions = {
  person: {
    formatData: formatPerson,
    Component: ContentPerson,
  },
  time: {
    formatData: formatTime,
    Component: ContentTime,
  },
  event: {
    formatData: formatEvent,
    Component: ContentEvent,
  },
  parent: {
    formatData: formatParent,
    Component: ({ name }) => <>{name}</>,
  },
}

interface Props {
  id: string
  isParent?: boolean
}

export const ContentfulContent: React.FC<Props> = ({
  id,
  isParent = false,
}) => {
  const { language } = useContext(ContextLang)
  const { loading, error, data } = useQuery(typeById, {
    variables: { id, locale: language },
  })

  if (loading) {
    if (isParent) return <LoadingDots />
    return <Loading />
  }
  if (error) return <div>Error! ${error}</div>

  const [type] = Object.keys(data).filter(
    key => data[key].items.length === 1 && key,
  )

  const fixedType = isParent ? 'parent' : type

  const { formatData, Component } = contentfulFunctions[fixedType]

  if (data[type].items[0]) {
    let cleanedItem = formatData(data[type].items[0])
    if (type === 'person' && !isParent) {
      cleanedItem = {
        ...cleanedItem,
        father: cleanedItem.fatherID && (
          <ContentfulContent id={cleanedItem.fatherID} isParent={true} />
        ),
        mother: cleanedItem.motherID && (
          <ContentfulContent id={cleanedItem.motherID} isParent={true} />
        ),
      }
    }
    return <Component {...cleanedItem} />
  }
  return <div>Error! No event found</div>
}
