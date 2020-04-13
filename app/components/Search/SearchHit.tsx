import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { ContextLang } from '../ContextLang'
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

export const SearchHit = ({ type, objectID, imageUrl, selectHit, ...hit }) => {
  const { language } = useContext(ContextLang)

  const defaultImages = {
    person: `//secure.gravatar.com/avatar/?s=${IMAGE_SIZE}&d=mm`,
    timespan:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MjEuMTI3IiBoZWlnaHQ9IjYyMS4xMjciIHZpZXdCb3g9Ijg5LjQzNyAtMTAuNTYzIDYyMS4xMjcgNjIxLjEyNyI+DQogIDxwYXRoIGZpbGw9IiNEQURCREMiIGQ9Ik0xMDkuNDM3IDEwaDU4MS4xMjd2NTgwLjU2MkgxMDkuNDM3eiIvPg0KICA8cGF0aCBmaWxsPSIjRjNGNEY0IiBkPSJNODkuNDM3LTEwLjU2M2g2MjEuMTI3djYyMS4xMjdIODkuNDM3Vi0xMC41NjN6bTM4MC45MDkgMjU5LjYybC04LjE4NS00Ny44MzEtMTY3LjUzMSAyOS40MTUgMjQuNTUzIDEzOS45MDggMTYuNjI3LTIuODEzdjEyLjAyMWgxNzAuMDg3di0xMzAuN2gtMzUuNTUxek0zMzUuODExIDM1My42NjZsLTUuMzcxIDEuMDIxLTE5Ljk1LTExMi43OTQgMTQwLjQxOS0yNC44MTIgNS42MjggMzEuOTc0SDMzNS44MTF2MTA0LjYxMXptMTU2LjI3NiAxMi4yNzdIMzQ5LjYyMVYyNjIuODY4aDE0Mi40NjZ2MTAzLjA3NXptLTEzMy4yNTktOTMuODY4djc2LjQ3NGwyOC45MDMtMTkuMTgxIDE3LjkwMyAxMS4yNTIgNDMuNDgtNDcuODI5IDUuNjI5IDIuMzAxIDI4LjEzNCAzMi40ODV2LTU1LjUwMkgzNTguODI4em0yNy42MjMgMzIuOTkzYy02LjY0OCAwLTEyLjI3Ni01LjYyNi0xMi4yNzYtMTIuMjc3IDAtNi42NSA1LjYyOC0xMi4yNzkgMTIuMjc2LTEyLjI3OSA2LjY1MSAwIDEyLjI3NiA1LjYyNiAxMi4yNzYgMTIuMjc5LjAwMiA2LjY1MS01LjYyNSAxMi4yNzctMTIuMjc2IDEyLjI3N3oiLz4NCjwvc3ZnPg==',
    event:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MjEuMTI3IiBoZWlnaHQ9IjYyMS4xMjciIHZpZXdCb3g9Ijg5LjQzNyAtMTAuNTYzIDYyMS4xMjcgNjIxLjEyNyI+DQogIDxwYXRoIGZpbGw9IiNEQURCREMiIGQ9Ik0xMDkuNDM3IDEwaDU4MS4xMjd2NTgwLjU2MkgxMDkuNDM3eiIvPg0KICA8cGF0aCBmaWxsPSIjRjNGNEY0IiBkPSJNODkuNDM3LTEwLjU2M2g2MjEuMTI3djYyMS4xMjdIODkuNDM3Vi0xMC41NjN6bTM4MC45MDkgMjU5LjYybC04LjE4NS00Ny44MzEtMTY3LjUzMSAyOS40MTUgMjQuNTUzIDEzOS45MDggMTYuNjI3LTIuODEzdjEyLjAyMWgxNzAuMDg3di0xMzAuN2gtMzUuNTUxek0zMzUuODExIDM1My42NjZsLTUuMzcxIDEuMDIxLTE5Ljk1LTExMi43OTQgMTQwLjQxOS0yNC44MTIgNS42MjggMzEuOTc0SDMzNS44MTF2MTA0LjYxMXptMTU2LjI3NiAxMi4yNzdIMzQ5LjYyMVYyNjIuODY4aDE0Mi40NjZ2MTAzLjA3NXptLTEzMy4yNTktOTMuODY4djc2LjQ3NGwyOC45MDMtMTkuMTgxIDE3LjkwMyAxMS4yNTIgNDMuNDgtNDcuODI5IDUuNjI5IDIuMzAxIDI4LjEzNCAzMi40ODV2LTU1LjUwMkgzNTguODI4em0yNy42MjMgMzIuOTkzYy02LjY0OCAwLTEyLjI3Ni01LjYyNi0xMi4yNzYtMTIuMjc3IDAtNi42NSA1LjYyOC0xMi4yNzkgMTIuMjc2LTEyLjI3OSA2LjY1MSAwIDEyLjI3NiA1LjYyNiAxMi4yNzYgMTIuMjc5LjAwMiA2LjY1MS01LjYyNSAxMi4yNzctMTIuMjc2IDEyLjI3N3oiLz4NCjwvc3ZnPg==',
  }

  const imgSrc = imageUrl
    ? `${imageUrl}?w=${IMAGE_SIZE}&h=${IMAGE_SIZE}&fit=fill`
    : defaultImages[type]

  return (
    <Wrapper onClick={() => selectHit(objectID)} indexType={type}>
      <span>{hit[`name_${language}`]}</span>
      <Image src={imgSrc} />
    </Wrapper>
  )
}
