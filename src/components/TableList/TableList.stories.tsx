import { TableList, TableListItem } from './index'

export default {
  title: 'Table List',
  component: TableList,
  parameters: {
    percy: { skip: true },
  },
}

export const tableList = () => (
  <TableList>
    <TableListItem title="TestItem1">Lorem</TableListItem>
    <TableListItem title="TestItem2">Ipsum</TableListItem>
    <TableListItem title="TestItem3">Dolor</TableListItem>
  </TableList>
)
