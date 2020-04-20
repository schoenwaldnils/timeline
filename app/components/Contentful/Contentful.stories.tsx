import React from 'react'

import { ContentfulContent } from './index'

export default {
  title: 'Contentful',
}

export const Person = () => {
  const id = '8d9htmcSCAAyIKoQqqSAm' // Isaak
  return <ContentfulContent id={id} />
}

export const Time = () => {
  const id = '71wQm8LIyc4qoSCocMIWAs' // Abrahamic Covenant
  return <ContentfulContent id={id} />
}

export const Event = () => {
  const id = '65NmPvVXcAW00i080AoaQM' // Adam created
  return <ContentfulContent id={id} />
}
