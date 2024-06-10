'use client'

import dynamic from 'next/dynamic'

const ThemeSwitch = dynamic(
  () => import('../ThemeSwitch').then((mod) => mod.ThemeSwitch),
  { ssr: false },
)

const Scaling = dynamic(() => import('../Scaling').then((mod) => mod.Scaling), {
  ssr: false,
})

const ScaleIndicator = dynamic(
  () => import('../Scaling/ScaleIndicator').then((mod) => mod.ScaleIndicator),
  {
    ssr: false,
  },
)

export const Config = ({ className }: { className?: string }) => (
  <div className={className}>
    <ThemeSwitch />
    <Scaling />
    <ScaleIndicator />
  </div>
)
