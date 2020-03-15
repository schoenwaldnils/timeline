import updateTimeProps from '../../js/updateTimeProps'

export function formatPerson(oldData) {
  const data = {
    ...oldData,
    type: 'person',
  }

  if (data.sys && data.sys.id) {
    data.id = data.sys.id
    delete data.sys
  }

  if (data.image) {
    data.image = data.image.url
  }

  if (data.spouseCollection) {
    if (data.spouseCollection.items.length) {
      data.spouse = data.spouseCollection.items.map(({ name, sys: { id } }) => {
        return { id, name }
      })
    }
    delete data.spouseCollection
  }

  if (data.father) {
    data.father = {
      id: data.father.sys ? data.father.sys.id : data.father.id,
      name: data.father.name,
    }
  }

  if (data.mother) {
    data.mother = {
      id: data.mother.sys ? data.mother.sys.id : data.mother.id,
      name: data.mother.name,
    }
  }

  if (data.childs) {
    if (data.childs.items.length) {
      data.childs = data.childs.items.map(({ name, sys: { id } }) => {
        return { id, name }
      })
    }
  }

  if (data.richText) {
    data.richText = data.richText.json
  }

  return updateTimeProps(data)
}

export function formatTime(oldData, type = 'time') {
  const data = {
    ...oldData,
    type,
  }

  if (data.sys && data.sys.id) {
    data.id = data.sys.id
    delete data.sys
  }

  if (data.richText) {
    data.richText = data.richText.json
  }

  return updateTimeProps(data)
}

export function formatEvent(oldData) {
  const data = {
    ...oldData,
  }
  if (data.sys && data.sys.id) {
    data.id = data.sys.id
    delete data.sys
  }

  if (data.richText) {
    data.richText = data.richText.json
  }

  return data
}
