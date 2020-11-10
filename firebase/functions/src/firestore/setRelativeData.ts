export const setRelativeData = async (
  db: any,
  id: string,
  data: { ancestors: string[]; descendants: string[] },
) => {
  const personRef = await db.collection('persons').doc(id)

  return personRef.set(data)
}
