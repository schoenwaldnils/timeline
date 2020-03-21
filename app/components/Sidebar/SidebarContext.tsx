import React from 'react'

interface SidebarContextProps {
  isActive: boolean
  content: React.ReactNode
  changeContent: (id: string) => void
  closeSidebar: Function
}

export const SidebarContext = React.createContext<SidebarContextProps | null>({
  isActive: false,
  content: null,
  changeContent: () => null,
  closeSidebar: () => null,
})
