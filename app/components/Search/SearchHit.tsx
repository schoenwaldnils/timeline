import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Highlighter from 'react-highlight-words'

import { ContextLang } from '../ContextLang'
import DefaultImgUrl from './defaultImg.svg'

import { shades, colors } from '../../js/colors'

const IMAGE_SIZE = 28

const typeColors = {
  person: colors.green,
  time: colors.yellow,
  event: shades.cb2,
}

const Wrapper = styled.button<{ indexType: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  margin-bottom: 2px;
  padding-top: 2px;
  padding-right: 0.5em;
  padding-bottom: 2px;
  padding-left: 0.75em;
  line-height: 1.2;
  text-align: left;
  cursor: pointer;
  background: none;
  border: 0;
  border-left: 0.125em solid ${({ indexType }) => typeColors[indexType]};

  :last-child {
    margin-bottom: 0;
  }
`

const Image = styled.img`
  width: ${IMAGE_SIZE}px;
  margin-left: 1em;
  border-radius: 0.3em;
`

export const SearchHit = ({
  type,
  objectID,
  imageUrl,
  selectHit,
  _highlightResult,
  ...hit
}) => {
  const { language } = useContext(ContextLang)

  const defaultImages = {
    person: `//secure.gravatar.com/avatar/?s=${IMAGE_SIZE * 2}&d=mm`,
    time: DefaultImgUrl,
    event: DefaultImgUrl,
  }

  const imgSrc = imageUrl
    ? `${imageUrl}?w=${IMAGE_SIZE * 2}&h=${IMAGE_SIZE * 2}&fit=fill`
    : defaultImages[type]

  return (
    <Wrapper onClick={() => selectHit(objectID)} indexType={type}>
      <Highlighter
        searchWords={_highlightResult[`name_${language}`].matchedWords}
        autoEscape={true}
        textToHighlight={hit[`name_${language}`]}
      />
      <Image src={imgSrc} />
    </Wrapper>
  )
}
