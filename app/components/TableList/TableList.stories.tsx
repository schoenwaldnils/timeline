import React from 'react'
import { TableList } from './index'

export default {
  title: 'TableList',
  component: TableList,
}

export const Basic = () => (
  <TableList
    list={{
      TestItem1: 'Lorem',
      TestItem2: 'Ipsum',
      TestItem3: 'Dolor',
    }}
  />
)
