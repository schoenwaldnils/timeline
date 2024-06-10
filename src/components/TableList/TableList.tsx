import { Fragment, ReactNode } from 'react'

import css from './TableList.module.css'

export const TableList = ({ children }: { children: ReactNode }) => (
  <div className={css.TableList}>{children}</div>
)

export const TableListItem = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <>
    <div className={css.TableList_key}>{title}:</div>
    <div>{children}</div>
  </>
)
