export function scaleNumber(number: number, scale: number) {
  return number * scale
}

function scaleNumberInObject(
  object: Object,
  scale: number,
  keyMap: Array<string>,
) {
  const newObject = {
    ...object,
  }

  Object.keys(object).forEach(key => {
    if (keyMap.includes(key) && object[key]) {
      newObject[key] = scaleNumber(object[key], scale)
    }
  })

  return newObject
}

export function scaleNumbers(
  array: Array<Object>,
  scale: number,
  keyMap: Array<string>,
) {
  return array.map(e => scaleNumberInObject(e, scale, keyMap))
}
