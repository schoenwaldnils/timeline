import React, { Component } from 'react'
import { Document } from '@contentful/rich-text-types'

import { useStore, CHANGE_CONTENT } from '../Store'
import { ContentPersonView } from './ContentPersonView'
import { useFindRelatives } from '../../hooks/useFindRelatives'

interface Person {
  id: string
  name: string
}

interface ContentPersonProps {
  id: string
  name: string
  image?: string
  startYear?: number
  startBlurriness?: number
  endYear?: number
  endBlurriness?: number
  duration?: number
  spouse?: Array<Person>
  fatherID?: string
  father?: Component
  motherID?: string
  mother?: Component
  childs?: Array<Person>
  richText?: Document
  wolLink?: string
}

export const ContentPerson: React.FC<ContentPersonProps> = props => {
  const [, dispatch] = useStore()
  const { relatives, findRelatives } = useFindRelatives()

  const changeContent = newId => {
    dispatch({
      type: CHANGE_CONTENT,
      contentId: newId,
    })
  }

  console.log(relatives)

  return (
    <ContentPersonView
      {...props}
      changeContent={changeContent}
      findRelatives={() => findRelatives(props.id)}
    />
  )
}
