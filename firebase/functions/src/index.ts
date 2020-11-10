/* eslint-disable consistent-return */
import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

import { getContentfulAncestors } from './getContentfulAncestors'
import { getContentfulDescendants } from './getContentfulDescendants'
import { setRelativeData } from './firestore/setRelativeData'
import { getRelativeData } from './firestore/getRelativeData'
import { getAllPersons } from './getAllPersons'

admin.initializeApp()

const db = admin.firestore()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const asyncFilter = async (arr: any[], predicate: any) => {
  const results = await Promise.all(arr.map(predicate))

  return arr.filter((_v, index) => results[index])
}

export const getRelatives = functions
  .region('europe-west2')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
      res.sendStatus(200).end()
      return
    }

    let { body } = req

    functions.logger.info(req.method, JSON.stringify(body))

    if (typeof req.body === 'string') {
      body = JSON.parse(req.body)
    }

    const id = body.entityId

    if (!id) {
      functions.logger.info('No ID found!', body)
      res.status(404).send('No ID found!')
      return
    }

    functions.logger.info(id)

    const data = await getRelativeData(db, id).catch(err => {
      res.status(400).end(err)
    })

    if (data) {
      res.status(200).send(data)
    } else {
      res.status(404).end()
    }
  })

export const setRelatives = functions
  .runWith({
    timeoutSeconds: 300,
  })
  .region('europe-west2')
  .https.onRequest(async (request, response) => {
    const id = request.body.entityId

    if (!id) {
      functions.logger.info('No ID found!', request.body)
      response.send({ status: 404, error: 'No ID found!' })
      return
    }

    const relatives = await Promise.resolve()
      .then(async () => {
        const ancestors = await getContentfulAncestors(id)
        return {
          ancestors: ancestors.filter(
            (value, index, self) => self.indexOf(value) === index,
          ),
        }
      })
      .then(async data => {
        const descendants = await getContentfulDescendants(id)
        return {
          ...data,
          descendants: descendants.filter(
            (value, index, self) => self.indexOf(value) === index,
          ),
        }
      })

    functions.logger.info(relatives, { structuredData: true })

    const res = await setRelativeData(db, id, relatives)
    console.log(res)

    response.send(res)
  })

export const setAllRelatives = functions
  .region('europe-west2')
  .https.onRequest(async (request, response) => {
    const persons = await getAllPersons()

    const filteredPersons = await asyncFilter(persons, async (id: string) => {
      const personRef = await db.collection('persons').doc(id)
      const person = await personRef.get()

      if (person.exists) {
        return false
      }

      return true
    })

    const res = await Promise.all(
      filteredPersons.map(async (id: string, index: number) => {
        setTimeout(async () => {
          const ancestors = await getContentfulAncestors(id)
          const descendants = await getContentfulDescendants(id)

          if (index === 0) {
            console.log({
              ancestors,
              descendants,
            })
          }

          const pRes = await setRelativeData(db, id, {
            ancestors,
            descendants,
          })

          if (pRes) {
            console.log('Relatives set for Id: ', id)
            functions.logger.info('Relatives set for Id: ', id)
            return id
          }
          return null
        }, 2000 * index)
      }),
    )

    functions.logger.info(res)

    response.send(res)
  })
