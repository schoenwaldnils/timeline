import styled from '@emotion/styled'
import { FC, Fragment } from 'react'

const List = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
`

const ListItem = styled.div``

export const TableList: FC<{
  list: Record<string, unknown>
}> = ({ list }) => (
  <List>
    {Object.keys(list).map((key) => (
      <Fragment key={key}>
        <ListItem>{key}:</ListItem>
        <ListItem>{list[key]}</ListItem>
      </Fragment>
    ))}
  </List>
)
