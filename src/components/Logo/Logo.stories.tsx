import { Logo } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    percy: { widths: [320, 1024] },
  },
}

export const logo = () => {
  return <Logo />
}
