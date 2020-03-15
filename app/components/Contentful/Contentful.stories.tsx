import React from 'react'

import {
  ContentfulPerson,
  ContentfulTime,
  ContentfulEvent,
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

export const Timeline = () => <ContentfulTimeline />
