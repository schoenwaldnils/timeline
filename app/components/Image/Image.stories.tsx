import { FC } from 'react'

import { Image as ImageComponent } from './Image'

export default {
  title: 'Image',
  component: ImageComponent,
}

export const Image: FC = () => (
  <ImageComponent
    src="//images.ctfassets.net/lvgw6if4imbu/3SLaWljI08yOc6IY4Gsok4/1c18ae6cc4bd6dd9521e4816a3d62647/glenn-carstens-peters-203007.jpg"
    width={520}
    height={200}
    objectFit="cover"
  />
)
