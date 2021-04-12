import Parser from 'html-react-parser'
import { FC } from 'react'

import faviconData from '../../../faviconData.json'

const faviconHtml = faviconData && faviconData.favicon.html_code
const Favicons = () => <>{Parser(faviconHtml)}</>

type Props = {
  url?: string
  type?: string
  title?: string
  description?: string
  image?: string
}

export const Meta: FC<Props> = ({
  url = 'https://timeline.schoen.world',
  type = 'website',
  title = 'Timeline',
  description = 'Overview of biblical persons and events',
  image = 'https://timeline.schoen.world/assets/images/favicon.png',
}) => (
  <>
    <meta content="width=device-width,initial-scale=1" name="viewport" />

    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="Timeline" />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />

    <Favicons />
  </>
)
