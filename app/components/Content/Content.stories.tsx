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
    image={{
      src:
        'https://images.ctfassets.net/81noh8m93vcd/7QNjYQCgQ8qaaikGqm2eG/080dccea68b8cb219b132d8928a1ccfe/1102013272_univ_sqr_xl.jpg',
      width: 500,
      height: 500,
    }}
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
    image={{
      src:
        'https://images.ctfassets.net/81noh8m93vcd/7QNjYQCgQ8qaaikGqm2eG/080dccea68b8cb219b132d8928a1ccfe/1102013272_univ_sqr_xl.jpg',
      width: 500,
      height: 500,
    }}
    fatherID="8d9htmcSCAAyIKoQqqSAm" // Isaak
    wolLink="#asd"
  />
)
export const Time: FC = () => (
  <ContentTime id="abc" name="Test time" startYear={100} />
)
