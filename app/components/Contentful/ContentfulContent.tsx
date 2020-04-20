import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { Loading, LoadingDots } from '../Loading'
import { ContentPerson, ContentTime, ContentEvent } from '../Content'

import { typeById } from '../../gql/typeById'
import { useContentful } from '../../customHooks/useContentful'
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
    Loading,
  },
  time: {
    formatData: formatTime,
    Component: ContentTime,
    Loading,
  },
  event: {
    formatData: formatEvent,
    Component: ContentEvent,
    Loading,
  },
  parent: {
    formatData: formatParent,
    Component: ({ name }) => <>{name}</>,
    Loading: LoadingDots,
  },
}

const ContentfulItem = ({ id, type }) => {
  const { formatData, Component, Loading: LoadingComp } = contentfulFunctions[
    type
  ]

  const collectionType = type === 'parent' ? 'person' : type

  const { loading, error, data } = useContentful(id, type)
  if (loading) return <LoadingComp />
  if (error) return <div>Error! ${error}</div>
  if (data[`${collectionType}Collection`].items[0]) {
    let cleanedItem = formatData(data[`${collectionType}Collection`].items[0])
    if (type === 'person') {
      cleanedItem = {
        ...cleanedItem,
        father: cleanedItem.fatherID && (
          <ContentfulItem id={cleanedItem.fatherID} type="parent" />
        ),
        mother: cleanedItem.motherID && (
          <ContentfulItem id={cleanedItem.motherID} type="parent" />
        ),
      }
    }
    return <Component {...cleanedItem} />
  }
  return <div>Error! No event found</div>
}

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

  return <ContentfulItem id={id} type={type} />
}
