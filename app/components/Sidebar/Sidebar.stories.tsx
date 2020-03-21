import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { Sidebar } from './Sidebar'
import { SidebarChange } from './SidebarChange'

export default {
  title: 'Sidebar',
  decorators: [withKnobs],
}

export const Basic = () => {
  const type = select('Type', ['person', 'time', 'event'], 'person')
  return (
    <>
      <SidebarChange type={type} />
      <Sidebar />
    </>
  )
}
