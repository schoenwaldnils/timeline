import { FC } from 'react'

import { RichText } from './index'
import { richText } from './richText.mock' // contentful ID 4iGBcSU5HQj2vEcHn0Huts

export default {
  title: 'RichText',
  component: RichText,
}

export const Basic: FC = () => <RichText content={richText} />
