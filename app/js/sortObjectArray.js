export function sortObjectArray(arrayOfObjects, sortKey, reversed = false) {
  if (typeof arrayOfObjects !== 'object') return arrayOfObjects
  if (arrayOfObjects.length < 1) return arrayOfObjects

  arrayOfObjects.sort((a, b) => {
    if (!a[sortKey] || !b[sortKey]) return
    if (Number.isInteger(a[sortKey]) && Number.isInteger(b[sortKey]))
      return a[sortKey] - b[sortKey]
    console.log(a[sortKey], b[sortKey])
    console.log(a[sortKey] - b[sortKey])
    return a[sortKey].localeCompare(b[sortKey])
  })

  if (reversed) return arrayOfObjects.reverse()
  return arrayOfObjects
}
