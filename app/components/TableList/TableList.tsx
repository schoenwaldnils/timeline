import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const List = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5em;
`

const ListItem = styled.div``

interface TableListProps {
  list: object
}

export const TableList: React.FC<TableListProps> = ({ list }) => (
  <List>
    {Object.keys(list).map(item => (
      <Fragment key={item}>
        <ListItem>{item}:</ListItem>
        <ListItem>{list[item]}</ListItem>
      </Fragment>
    ))}
  </List>
)

TableList.defaultProps = {
  list: {},
}
