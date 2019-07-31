const marked = require('./marked');
const updateTimeProps = require('./updateTimeProps');
const updateEventProps = require('./updateEventProps');

function formatPerson(data) {
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

function formatTime(data) {
  if (data.sys && data.sys.id) {
    data.id = data.sys.id;
    delete data.sys;
  }

  if (data.content) {
    data.content = marked(data.content);
  }
  return data;
}

function formatEvent(data) {
  if (data.sys && data.sys.id) {
    data.id = data.sys.id;
    delete data.sys;
  }

  if (data.content) {
    data.content = marked(data.content);
  }
  return data;
}

module.exports = (data) => {
  const {
    personCollection: { items: persons },
    timeCollection: { items: times },
    eventCollection: { items: events },
  } = data;

  const formatedPersons = persons.map(person => formatPerson(person));
  const formatedTimes = times.map(time => formatTime(time));
  const formatedEvents = events.map(event => formatEvent(event));

  const updatedPersons = formatedPersons.map(time => updateTimeProps(time));
  const updatedTimes = formatedTimes.map(time => updateTimeProps(time));
  const updatedEvents = formatedEvents.map((event, index) => updateEventProps({
    ...event,
    zIndex: events.length - index,
  }));

  const filteredPersons = updatedPersons.filter(({ startYear, endYear, stillActive }) => {
    if (startYear && (endYear || stillActive)) return true;
    return false;
  });


  return {
    persons: updatedPersons,
    filteredPersons,
    times: updatedTimes,
    events: updatedEvents,
  };
};
