import Color from 'color'

export function generateGradient(startBlurriness, endBlurriness, color) {
  if (!startBlurriness && !endBlurriness) {
    return color
  }

  let left = `${color} 0%,`
  let right = `${color} 100%`

  // setting transparent to rgba value due to a safari bug
  // https://css-tricks.com/thing-know-gradients-transparent-black/
  const transparent = Color(color).alpha(0)

  if (startBlurriness) {
    left = `${transparent}, ${color} ${startBlurriness}px,`
  }

  if (endBlurriness) {
    right = `${color} calc(100% - ${endBlurriness}px), ${transparent} 100%`
  }

  return `
  linear-gradient(
    to right,
    ${left}
    ${right}
  );`
}
