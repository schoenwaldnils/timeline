import React from 'react'
import Parser from 'html-react-parser'
import faviconData from '../../../faviconData.json'

const faviconHtml = faviconData && faviconData.favicon.html_code
const Favicons = () => <>{Parser(faviconHtml)}</>

export const Meta = ({ url, type, title, description, image }) => (
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

    <link rel="preconnect" href="https://graphql.contentful.com" />
    <link rel="preconnect" href="https://p7r800rwy1-dsn.algolia.net" />
  </>
)

Meta.defaultProps = {
  url: 'https://timeline.schoenwald.media',
  type: 'website',
  title: 'Timeline',
  description: 'Overview of biblical persons and events',
  image: 'https://timeline.schoen.world/assets/images/favicon.png',
}
