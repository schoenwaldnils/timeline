/* eslint-disable jsx-a11y/alt-text */
import NextImage, { ImageProps } from 'next/image'
import { FC } from 'react'

import { FixedStringImageProps } from '@/@types/NextImage'

type ImageType =
  | (ImageProps & { isExternal?: never })
  | (Exclude<ImageProps, 'src'> & {
      src: string
      isExternal: boolean
    })

export const Image: FC<ImageType> = ({ isExternal, ...props }) => {
  const isContentful = (props.src as string).includes('ctfassets')

  if (isExternal) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img {...props} src={props.src as string} loading="lazy" />
    )
  }

  if (isContentful) {
    const fixedProps = {
      ...props,
      placeholder: 'blur',
      blurDataURL: `${props.src}?w=50&q=10`,
    } as FixedStringImageProps

    return <NextImage {...fixedProps} />
  }

  return <NextImage {...props} />
}
