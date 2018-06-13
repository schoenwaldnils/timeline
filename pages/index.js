import React from 'react';
import PropTypes from 'prop-types';
import { getEntries, getFields } from '../scripts/contentful';
import { timeperiod } from '../app/js/utils';

import '../app/css/index.css'

// import Header from '../app/components/Header/Header';
import Timeline from '../app/components/Timeline/Timeline';

const Page = ({ persons, times, events }) => {
  return (
    <div className="Page">
      {/* <Header /> */}
      <section className="Page-wrapTimeline" role="main">
        <Timeline persons={persons} times={times} events={events} />
      </section>
    </div>
  );
};

Page.getInitialProps = async () => {
  const personEntries = await getEntries('person');
  const persons = await Promise.all(personEntries.map(async (person) => {
    const personFields = await getFields(person.id);
    personFields.id = person.id;

    if (personFields.image) {
      const image = personFields.image.fields.file.url;
      delete personFields.image;
      personFields.image = image;
    }

    if (personFields.startYear && personFields.endYear) {
      personFields.duration = timeperiod(
        personFields.startYear,
        personFields.endYear,
      );
    } else if (personFields.startYear && personFields.alive) {
      personFields.duration = timeperiod(
        personFields.startYear,
        new Date().getFullYear(),
      );
    }

    if (personFields.father) {
      const father = personFields.father.fields.name;
      delete personFields.father;
      personFields.father = father;
    }

    if (personFields.mother) {
      const mother = personFields.mother.fields.name;
      delete personFields.mother;
      personFields.mother = mother;
    }

    if (personFields.childs) {
      const childs = personFields.childs.map(mapchilds => mapchilds.fields.name);
      delete personFields.childs;
      personFields.childs = childs.sort();
    }
    return personFields;
  }));

  const timeEntries = await getEntries('time');
  const times = await Promise.all(timeEntries.map(async (time) => {
    const timeFields = await getFields(time.id);
    timeFields.id = time.id;

    if (timeFields.startYear) {
      timeFields.duration = timeperiod(
        timeFields.startYear,
        timeFields.endYear || new Date().getFullYear(),
      );
    }

    return timeFields;
  }));

  const eventEntries = await getEntries('event');
  const events = await Promise.all(eventEntries.map(async (event) => {
    const eventFields = await getFields(event.id);
    eventFields.id = event.id;

    return eventFields;
  }));


  return {
    persons,
    times,
    events,
  };
};

Page.propTypes = {
  persons: PropTypes.array,
  times: PropTypes.array,
  events: PropTypes.array,
};

Page.defaultProps = {
  persons: null,
  times: null,
  events: null,
};

export default Page;
