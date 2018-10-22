import { timeperiod } from '../app/js/utils';

export function formatPerson(data) {
  if (data.sys && data.sys.id) {
    data.id = data.sys.id;
    delete data.sys;
  }

  if (data.image) {
    data.avatar = data.image.url;
    delete data.image;
  }

  if (data.father) {
    data.father = data.father.name;
  }

  if (data.mother) {
    data.mother = data.mother.name;
  }

  if (data.childsCollection) {
    if (data.childsCollection.items.length) {
      data.childs = data.childsCollection.items.map(child => child.name);
    }
    delete data.childsCollection;
  }

  if (data.startYear && data.endYear) {
    data.duration = timeperiod(
      data.startYear,
      data.endYear,
    );
  } else if (data.startYear && data.alive) {
    data.duration = timeperiod(
      data.startYear,
      new Date().getFullYear(),
    );
  }

  return data;
}

export function formatTime(data) {
  if (data.sys && data.sys.id) {
    data.id = data.sys.id;
    delete data.sys;
  }

  if (data.startYear) {
    data.duration = timeperiod(
      data.startYear,
      data.endYear || new Date().getFullYear(),
    );
  }
  return data;
}

export function formatEvent(data) {
  if (data.sys && data.sys.id) {
    data.id = data.sys.id;
    delete data.sys;
  }

  return data;
}
