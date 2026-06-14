/* eslint-disable jsx-a11y/alt-text */
import NextImage, { ImageProps } from 'next/image'

type ImageType =
  | (ImageProps & { isExternal?: never })
  | (Exclude<ImageProps, 'src'> & {
      src: string
      isExternal: boolean
    })

export const Image = ({ isExternal, ...props }: ImageType) => {
  if (isExternal) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img {...props} src={props.src as string} loading="lazy" />
    )
  }

  return <NextImage {...props} />
}
