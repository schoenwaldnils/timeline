import React from 'react';
import PropTypes from 'prop-types';
import { getEntries, getFields } from '../scripts/contentful';
import { timeperiod } from '../app/js/utils';
// import Header from '../app/components/Header/Header';
import Timeline from '../app/components/Timeline/Timeline';

const Page = ({ persons, times, events }) => {
  // console.log(persons);
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
    const personFields = await getFields(person);
    if (personFields.image) {
      const image = personFields.image.fields.file.url;
      delete personFields.image;
      personFields.image = image;
    }

    if (personFields.birth) {
      personFields.age = timeperiod(
        personFields.birth,
        personFields.death || new Date().getFullYear(),
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

    if (personFields.children) {
      const children = personFields.children.map(mapChildren => mapChildren.fields.name);
      delete personFields.children;
      personFields.children = children.sort();
    }
    return personFields;
  }));

  const timeEntries = await getEntries('time');
  const times = await Promise.all(timeEntries.map(async (time) => {
    const timeFields = await getFields(time);
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
    const eventFields = await getFields(event);
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
