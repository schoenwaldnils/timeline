import { FC } from 'react'
import { useQuery } from 'react-query'

import {
  formatEvent,
  formatParent,
  formatPerson,
  formatTime,
} from '../../js/objectFormating/formatData'
import { fetchContentfulEntry } from '../../lib/fetchContentfulEntry'
import { ContentEvent, ContentPerson, ContentTime } from '../Content'
import { Loading, LoadingDots } from '../Loading'
import { useStore } from '../Store'

const ContentParent = (p) => <>{p.name}</>

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
    Component: ContentParent,
  },
}

interface Props {
  id: string
  isParent?: boolean
}

export const ContentfulContent: FC<Props> = ({ id, isParent = false }) => {
  const { store } = useStore()
  const { locale } = store

  const { status, data, error } = useQuery(
    locale && id && [`contentfulEntry-${id}`, { locale, id }],
    fetchContentfulEntry,
  )

  if (status === 'error') {
    // eslint-disable-next-line no-console
    console.log(error)
    return <div>Error!</div>
  }

  if (status === 'loading') {
    if (isParent) return <LoadingDots />
    return <Loading />
  }

  const [type] = Object.keys(data).filter(
    (key) => data[key].items.length === 1 && key,
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
  return <div>Error! No Item found</div>
}
