const URL =
  'https://europe-west2-schoenworld-timeline.cloudfunctions.net/getRelatives'
// const URL =
//   'http://localhost:5001/schoenworld-timeline/us-central1/getRelatives'

export const getFirebaseRelatives = async (id: string) => {
  console.log('getFirebaseRelatives')

  const data = await fetch(URL, {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ entityId: id }),
  })
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      throw err
    })

  return {
    ancestors: data.ancestors || [],
    descendants: data.descendants || [],
  }
}
