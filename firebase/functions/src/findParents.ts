export const findParents = (linkedFrom: any, id: string): string[] => {
  const parents = linkedFrom.personCollection.items.filter(
    ({ childs }: { childs: any }) => {
      const childIDs =
        childs.items &&
        Object.keys(childs.items).map(key => childs.items[key].sys.id)
      if (!childIDs) return false
      if (childIDs.includes(id)) return true
      return false
    },
  )
  if (!parents.length) return []

  return parents.map((p: any) => p.sys.id)
}
