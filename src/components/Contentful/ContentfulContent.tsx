import { useRouter } from 'next/router'
import { FC } from 'react'
import { useQuery } from 'react-query'

import { ContentEvent, ContentPerson, ContentTime } from '@/components/Content'
import { Loading, LoadingDots } from '@/components/Loading'
import {
  formatEvent,
  formatParent,
  formatPerson,
  formatTime,
} from '@/js/objectFormating/formatData'
import { fetchContentfulEntry } from '@/lib/fetchContentfulEntry'

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
  const { locale } = useRouter()

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
