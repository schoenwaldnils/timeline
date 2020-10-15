import React, { useState } from 'react'

import { ContentfulContent } from '../Contentful'
import { SidebarView } from './SidebarView'
import { CLOSE_SIDEBAR, useStore } from '../Store'

interface SidebarProps {
  isActive: boolean
  contentId: string
}

export const Sidebar: React.FC<SidebarProps> = ({
  isActive = false,
  contentId,
}) => {
  const { dispatch } = useStore()
  const [state, setState] = useState({ id: undefined, content: null })

  if (contentId && contentId !== state.id) {
    setState({ id: contentId, content: <ContentfulContent id={contentId} /> })
  }

  const handleCloseSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR })
  }

  return (
    <SidebarView isActive={isActive} closeSidebar={handleCloseSidebar}>
      {state.content}
    </SidebarView>
  )
}

export default Sidebar
