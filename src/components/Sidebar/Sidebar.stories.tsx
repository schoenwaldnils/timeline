import { action } from '@storybook/addon-actions'
import { FC } from 'react'

import { SidebarView } from './SidebarView'

export default {
  title: 'Sidebar',
  component: SidebarView,
}

export const Sidebar: FC = () => (
  <SidebarView isActive={true} closeSidebar={action('close sidebar')}>
    <div>Test</div>
  </SidebarView>
)
