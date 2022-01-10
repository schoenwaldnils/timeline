export function generateGradient(
  startBlurriness: number,
  endBlurriness: number,
  color: string,
  colorTransparent: string,
): string {
  if (!startBlurriness && !endBlurriness) {
    return color
  }

  let left = `${color} 0%,`
  let right = `${color} 100%`

  if (startBlurriness) {
    left = `${colorTransparent}, ${color} ${startBlurriness}px,`
  }

  if (endBlurriness) {
    right = `${color} calc(100% - ${endBlurriness}px), ${colorTransparent} 100%`
  }

  return `
  linear-gradient(
    to right,
    ${left}
    ${right}
  );`
}
