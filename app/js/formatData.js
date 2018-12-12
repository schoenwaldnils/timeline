import marked from './marked';

export function formatPerson(data) {
  if (data.sys && data.sys.id) {
    data.id = data.sys.id;
    delete data.sys;
  }

  if (data.image) {
    data.avatar = data.image.url;
    delete data.image;
  }

  if (data.spouseCollection) {
    if (data.spouseCollection.items.length) {
      data.spouse = data.spouseCollection.items.map(({ name, sys: { id } }) => {
        return { id, name };
      });
    }
    delete data.spouseCollection;
  }

  if (data.father) {
    data.father = {
      id: data.father.sys ? data.father.sys.id : data.father.id,
      name: data.father.name,
    };
  }

  if (data.mother) {
    data.mother = {
      id: data.mother.sys ? data.mother.sys.id : data.mother.id,
      name: data.mother.name,
    };
  }

  if (data.childsCollection) {
    if (data.childsCollection.items.length) {
      data.childs = data.childsCollection.items.map(({ name, sys: { id } }) => {
        return { id, name };
      });
    }
    delete data.childsCollection;
  }

  if (data.content) {
    data.content = marked(data.content);
  }

  return data;
}

export function formatTime(data) {
  if (data.sys && data.sys.id) {
    data.id = data.sys.id;
    delete data.sys;
  }

  if (data.content) {
    data.content = marked(data.content);
  }
  return data;
}

export function formatEvent(data) {
  if (data.sys && data.sys.id) {
    data.id = data.sys.id;
    delete data.sys;
  }

  if (data.content) {
    data.content = marked(data.content);
  }
  return data;
}
