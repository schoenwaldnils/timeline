import { FC } from 'react'

import { RichText as RichTextComponent } from './index'
import { richText } from './richText.mock' // contentful ID 4iGBcSU5HQj2vEcHn0Huts

export default {
  title: 'Rich Text',
  component: RichTextComponent,
}

export const RichText: FC = () => <RichTextComponent content={richText} />
