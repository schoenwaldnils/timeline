import React, { useContext } from 'react'

import { SidebarContext } from './SidebarContext'

export const SidebarChange: React.FC<{ type: string }> = ({ type }) => {
  if (!type) return null

  const { changeContent } = useContext(SidebarContext)

  const options = {
    person: '8d9htmcSCAAyIKoQqqSAm',
    time: '71wQm8LIyc4qoSCocMIWAs',
    event: '65NmPvVXcAW00i080AoaQM',
  }

  changeContent(options[type])

  return null
}
