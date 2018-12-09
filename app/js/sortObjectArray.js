export default function sortObjectArray(arrayOfObjects, sortKey, reversed = false) {
  if (arrayOfObjects.length < 1) return arrayOfObjects;

  arrayOfObjects.sort((a, b) => {
    if (Number.isInteger(a[sortKey]) && Number.isInteger(b[sortKey])) return a[sortKey] - b[sortKey];
    return a[sortKey].localeCompare(b[sortKey]);
  });

  if (reversed) return arrayOfObjects.reverse();
  return arrayOfObjects;
}
