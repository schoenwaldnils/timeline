import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Parser from 'html-react-parser'
import faviconData from '../../../faviconData.json'

const faviconHtml = faviconData && faviconData.favicon.html_code
const Favicons = () => Parser(faviconHtml)

const Meta = ({ url, type, title, description, image }) => (
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

Meta.defaultProps = {
  url: 'https://timeline.schoenwald.media',
  type: 'website',
  title: 'Timeline',
  description: 'Overview of biblical Persons and events',
  image: 'https://schoenwald.media/static/assets/images/favicon.png',
}

Meta.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default Meta
