import React from 'react'
import { action } from '@storybook/addon-actions'

import { SidebarView } from './SidebarView'

export default {
  title: 'Sidebar',
  component: SidebarView,
}

export const Basic = () => (
  <SidebarView isActive={true} closeSidebar={action('close sidebar')}>
    <div>Test</div>
  </SidebarView>
)
