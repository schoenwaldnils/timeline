import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { languages, ContextLang } from '../ContextLang'

const Wrapper = styled.div`
  display: inline-block;
  background-color: #fff;
  box-shadow: 0.25em 0.25em 0.5em 0 rgba(0, 0, 0, 0.25);
`

const Button = styled.button`
  padding: 0.5em 0.7em;
  border: 0;
  background-color: #fff;
`

interface Props {
  language: string
  changeLanguage: Function
}

export const LangSwitch: React.FC<Props> = () => {
  const { language, changeLanguage } = useContext(ContextLang)

  if (!language) return null

  const otherLanguages = languages.filter(lang => lang !== language)

  return (
    <Wrapper>
      {otherLanguages.map(otherLanguage => (
        <Button
          key={otherLanguage}
          onClick={() => changeLanguage(otherLanguage)}
        >
          {otherLanguage}
        </Button>
      ))}
    </Wrapper>
  )
}
