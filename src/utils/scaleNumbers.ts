export function scaleNumber(number: number, scale: number): number {
  return number * scale
}

function scaleNumberInObject(
  object: Record<string, unknown>,
  scale: number,
  keyMap: Array<string>,
) {
  const newObject = {
    ...object,
  }

  Object.keys(object).forEach((key) => {
    if (keyMap.includes(key) && object[key]) {
      newObject[key] = scaleNumber(object[key] as number, scale)
    }
  })

  return newObject
}

export function scaleNumbers(
  array: Record<string, unknown>[],
  scale: number,
  keyMap: string[],
): Record<string, unknown>[] {
  return array.map((e) => scaleNumberInObject(e, scale, keyMap))
}
