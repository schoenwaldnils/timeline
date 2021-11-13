export interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

export interface StaticRequire {
  default: StaticImageData
}

export declare type StaticImport = StaticRequire | StaticImageData

export declare type StringImageProps = {
  src: string
} & (
  | {
      width?: never
      height?: never
      layout: 'fill'
    }
  | {
      width: number | string
      height: number | string
      layout?: Exclude<LayoutValue, 'fill'>
    }
) &
  (
    | {
        placeholder?: Exclude<PlaceholderValue, 'blur'>
        blurDataURL?: never
      }
    | {
        placeholder: 'blur'
        blurDataURL: string
      }
  )

export declare type ObjectImageProps = {
  src: StaticImport
  width?: number | string
  height?: number | string
  layout?: LayoutValue
  placeholder?: PlaceholderValue
  blurDataURL?: never
}

export declare type FixedStringImageProps = Omit<
  JSX.IntrinsicElements['img'],
  'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading' | 'style'
> & {
  loader?: ImageLoader
  quality?: number | string
  priority?: boolean
  loading?: LoadingValue
  unoptimized?: boolean
  objectFit?: ImgElementStyle['objectFit']
  objectPosition?: ImgElementStyle['objectPosition']
} & StringImageProps
