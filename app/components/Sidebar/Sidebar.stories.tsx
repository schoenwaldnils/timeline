import React from 'react'
import { action } from '@storybook/addon-actions'

import { Sidebar } from './Sidebar'

export default {
  title: 'Sidebar',
  component: Sidebar,
}

export const Basic = () => (
  <Sidebar
    isActive={true}
    content={<div>Test</div>}
    closeSidebar={action('close sidebar')}
  />
)
