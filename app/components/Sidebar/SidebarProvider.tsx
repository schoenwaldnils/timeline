import React, { useState, useEffect } from 'react'

import { ContentfulContent } from '../Contentful/ContentfulContent'

import { SidebarContext } from './SidebarContext'

import {
  getUserContentID,
  setUserContentID,
  removeUserContentID,
} from './userContentID'

export const SidebarProvider: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false)
  const [content, setContent] = useState(null)

  const changeContent = (newId: string) => {
    setUserContentID(newId)
    setIsActive(true)

    setContent(<ContentfulContent id={newId} />)
  }

  const closeSidebar = () => {
    removeUserContentID()
    setIsActive(false)
  }

  const triggerCheck = () => {
    const localId = getUserContentID()
    if (localId) {
      changeContent(localId)
    }
  }

  useEffect(() => {
    window.onpopstate = () => {
      triggerCheck()
    }

    triggerCheck()
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isActive,
        content,
        changeContent,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
