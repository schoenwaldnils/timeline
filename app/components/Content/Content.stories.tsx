import { FC } from 'react'

import {
  ContentEvent,
  ContentPerson,
  ContentTemplate,
  ContentTime,
} from './index'

export default {
  title: 'Content',
}

export const TemplateWithIamge: FC = () => (
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

export const Event: FC = () => (
  <ContentEvent id="abc" name="ContentEvent Test" year={2000} />
)
export const Person: FC = () => (
  <ContentPerson
    id="abc"
    name="Jon Doe"
    startYear={1900}
    image="https://picsum.photos/id/1010/500/300"
    fatherID="8d9htmcSCAAyIKoQqqSAm" // Isaak
    wolLink="#asd"
  />
)
export const Time: FC = () => (
  <ContentTime id="abc" name="Test time" startYear={100} />
)
