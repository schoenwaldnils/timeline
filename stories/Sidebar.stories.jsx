import React from 'react'

import {
  Sidebar,
  SidebarContentEvent,
  SidebarContentPerson,
  SidebarContentTime,
} from '../app/components/Sidebar'

export default {
  title: 'Sidebar',
  component: Sidebar,
}

export const Default = () => <Sidebar />
export const Event = () => <SidebarContentEvent />
export const Person = () => <SidebarContentPerson />
export const Time = () => <SidebarContentTime />
