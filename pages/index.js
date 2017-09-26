import React from 'react';
import PropTypes from 'prop-types';
import { getEntries, getFields } from '../scripts/contentful';
import timeperiod from '../app/js/utils';
import Header from '../app/components/Header/Header';
import Timeline from '../app/components/Timeline/Timeline';

const Page = ({ persons }) => {
  return (
    <div className="Page">
      <Header />
      <section className="Page-wrapTimeline" role="main">
        <Timeline persons={persons} />
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
        personFields.death || new Date().getFullYear());
    }
    return personFields;
  }));

  return {
    persons,
  };
};

Page.propTypes = {
  persons: PropTypes.array,
};

Page.defaultProps = {
  persons: null,
};

export default Page;
