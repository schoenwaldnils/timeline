import { parse as qsParse, stringify as qsStringify } from 'qs'

import { A } from '@/components/Typography'

interface ContentfulLinkProps {
  wolLink: string
}

export const LinkToWOL = ({ wolLink }: ContentfulLinkProps) => {
  let pathName = wolLink
  let paragraph: string | undefined

  if (wolLink && wolLink.includes('#')) {
    let paragraphPlain: string
    ;[pathName, paragraphPlain] = wolLink.split('#')

    paragraph = String(qsParse(paragraphPlain).h)
  }

  const pathParts = pathName.split('/')

  const docid = pathParts[pathParts.length - 1]

  const localePlain = pathParts[pathParts.length - 2]
  const [, wtlocale] = localePlain ? localePlain.split('-') : []

  if (!docid || !wtlocale) {
    console.error('"docid" or "wtlocale" missing!')
    return null
  }

  const jwFinderParams = {
    wtlocale: wtlocale.toUpperCase(),
    docid,
    srcid: 'link',
    paragraph,
  }

  const jwFinderLink = `https://www.jw.org/finder?${qsStringify(
    jwFinderParams,
  )}`

  return (
    <div style={{ marginBottom: '1em' }}>
      <A href={jwFinderLink} target="_blank" rel="noopener noreferrer">
        WOL-link
      </A>
    </div>
  )
}
