import React from 'react'

import {
  ContentTemplate,
  ContentEvent,
  ContentPerson,
  ContentTime,
} from './index'

export default {
  title: 'Content',
}

export const Template = () => (
  <ContentTemplate title="ContentTemplate Test">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      doloremque incidunt quasi fugit, nemo culpa sed reiciendis, fugiat sint
      voluptatem rem atque suscipit excepturi quibusdam molestias eos? Eius,
      iste corrupti?
    </p>
  </ContentTemplate>
)

export const TemplateWithIamge = () => (
  <ContentTemplate
    title="ContentTemplate Test"
    image="https://picsum.photos/id/1010/500/300"
  >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
    doloremque incidunt quasi fugit, nemo culpa sed reiciendis, fugiat sint
    voluptatem rem atque suscipit excepturi quibusdam molestias eos? Eius, iste
    corrupti?
  </ContentTemplate>
)

export const Event = () => (
  <ContentEvent id="abc" name="ContentEvent Test" year={2000} />
)
export const Person = () => (
  <ContentPerson
    id="abc"
    name="Jon Doe"
    startYear={1900}
    image="https://picsum.photos/id/1010/500/300"
    fatherID="8d9htmcSCAAyIKoQqqSAm" // Isaak
  />
)
export const Time = () => (
  <ContentTime id="abc" name="Test time" startYear={100} />
)
