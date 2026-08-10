import { useLocale } from 'next-intl'
import { parse as qsParse, stringify as qsStringify } from 'qs'

import { A } from '@/components/Typography'
import { Locale } from '@/i18n-config'

interface LinkToWOLProps {
  wolLink: string
}

// JW.org uses its own legacy per-language codes rather than ISO locale codes.
const wtLocaleByLocale: Record<Locale, string> = {
  en: 'E',
  de: 'X',
}

export const LinkToWOL = ({ wolLink }: LinkToWOLProps) => {
  const locale = useLocale() as Locale

  let pathName = wolLink
  let paragraph: string | undefined

  if (wolLink && wolLink.includes('#')) {
    let paragraphPlain: string
    ;[pathName, paragraphPlain] = wolLink.split('#')

    const h = qsParse(paragraphPlain).h
    paragraph = typeof h === 'string' ? h : undefined
  }

  const pathParts = pathName.split('/')

  const docid = pathParts[pathParts.length - 1]

  if (!docid) {
    console.error('"docid" missing!')
    return null
  }

  const jwFinderParams = {
    wtlocale: wtLocaleByLocale[locale],
    docid,
    srcid: 'link',
    paragraph,
  }

  const jwFinderLink = `https://www.jw.org/finder?${qsStringify(jwFinderParams)}`

  return (
    <div style={{ marginBottom: '1em' }}>
      <A href={jwFinderLink} target="_blank" rel="noopener noreferrer">
        WOL-link
      </A>
    </div>
  )
}
