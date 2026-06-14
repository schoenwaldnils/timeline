import { Header } from './Header'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
}

export const header = () => (
  <div
    style={{
      height: '80vh',
      backgroundColor: 'var(--cb4)',
    }}
  >
    <Header />
  </div>
)
