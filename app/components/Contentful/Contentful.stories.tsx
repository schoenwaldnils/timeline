import React from 'react'

import {
  ContentfulPerson,
  ContentfulTime,
  ContentfulEvent,
  ContentfulContent,
  ContentfulTimeline,
} from './index'

export default {
  title: 'Contentful',
}

export const Person = () => {
  const id = '8d9htmcSCAAyIKoQqqSAm' // Isaak
  return <ContentfulPerson id={id} />
}

export const Time = () => {
  const id = '71wQm8LIyc4qoSCocMIWAs' // Abrahamic Covenant
  return <ContentfulTime id={id} />
}

export const Event = () => {
  const id = '65NmPvVXcAW00i080AoaQM' // Adam created
  return <ContentfulEvent id={id} />
}

export const Content = () => {
  const id = '8d9htmcSCAAyIKoQqqSAm' // Isaak
  return <ContentfulContent id={id} />
}

export const Timeline = () => <ContentfulTimeline />
