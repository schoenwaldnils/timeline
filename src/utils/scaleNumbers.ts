export function scaleNumber(number: number, scale: number): number {
  return number * scale
}

function scaleNumberInObject<T>(object: T, scale: number, keyMap: (keyof T)[]): T {
  const newObject: T = {
    ...object,
  }

  keyMap.forEach((key: keyof T) => {
    if (object[key]) {
      newObject[key] = scaleNumber(object[key] as number, scale) as T[keyof T]
    }
  })

  return newObject
}

export function scaleNumbers<T>(array: T[], scale: number, keyMap: (keyof T)[]): T[] {
  return array.map((e) => scaleNumberInObject(e, scale, keyMap))
}
