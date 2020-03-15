import Color from 'color'

export function generateGradient(startBlurriness, endBlurriness, color) {
  if (!startBlurriness && !endBlurriness) {
    return color
  }

  // setting transparent to rgba value due to a safari bug
  // https://css-tricks.com/thing-know-gradients-transparent-black/
  const transparent = Color(color).alpha(0)

  const gradientStart = `${transparent} 0px, `
  const gradientEnd = `${transparent} 100%`

  return `
  linear-gradient(
    to right,
    ${gradientStart}
    ${color} ${startBlurriness}px,
    ${color} calc(100% - ${endBlurriness}px),
    ${gradientEnd})`
}
