export const getRelativeData = async (db: any, id: string) => {
  const personRef = await db.collection('persons').doc(id)
  const person = await personRef.get()

  if (!person.exists) {
    throw new Error('No such document!')
  }

  return person.data()
}
