import { FC } from 'react'

import { TableList as TableListComponent } from './index'

export default {
  title: 'Table List',
  component: TableListComponent,
  parameters: {
    percy: { skip: true },
  },
}

export const TableList: FC = () => (
  <TableListComponent
    list={{
      TestItem1: 'Lorem',
      TestItem2: 'Ipsum',
      TestItem3: 'Dolor',
    }}
  />
)
