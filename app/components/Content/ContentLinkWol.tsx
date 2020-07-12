import React from 'react'
import qs from 'qs'
import styled from '@emotion/styled'

import { A } from '../Typography'

const Wrapper = styled.div`
  margin-bottom: 1em;
`

interface ContentfulLinkProps {
  wolLink: string
}

export const LinkToWOL: React.FC<ContentfulLinkProps> = ({ wolLink }) => {
  let pathName = wolLink
  let paragraph: string | null = null

  if (wolLink.includes('#')) {
    let paragraphPlain: string
    ;[pathName, paragraphPlain] = wolLink.split('#')

    paragraph = qs.parse(paragraphPlain).h
  }

  const pathParts = pathName.split('/')

  const docid = pathParts[pathParts.length - 1]

  const localePlain = pathParts[pathParts.length - 2]
  const [, wtlocale] = localePlain.split('-')

  if (!docid || !wtlocale) {
    console.error('"docid" or "wtlocale" missing!')
    return null
  }

  const jwFinderParams = {
    wtlocale: wtlocale.toUpperCase(),
    docid,
    srctype: 'schoenwaldnils-timeline',
    srcid: 'link',
    paragraph,
  }

  const jwFinderLink = `https://www.jw.org/finder?${qs.stringify(
    jwFinderParams,
  )}`

  return (
    <Wrapper>
      <A href={jwFinderLink} target="_blank" rel="noopener noreferrer">
        WOL-link
      </A>
    </Wrapper>
  )
}
