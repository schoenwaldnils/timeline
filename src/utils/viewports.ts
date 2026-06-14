type ViewportKey = 'sm' | 'md' | 'lg'

type Viewports = Record<ViewportKey, number | string>

export const viewports: Viewports = {
  sm: 481,
  md: 621,
  lg: 769,
}

export const viewportsJs: Viewports = {
  ...viewports,
}

Object.entries(viewports).forEach(([key, value]) => {
  viewportsJs[key as ViewportKey] = `(width >= ${value}px)`
})

export const viewportsCss: Record<string, number | string> = {}

Object.entries(viewportsJs).forEach(([key, value]) => {
  viewportsCss[`--${key}-viewport`] = value
  return true
})
