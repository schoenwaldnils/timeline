import React from 'react';
import PropTypes from 'prop-types';


import '../app/css/index.css';

// import Header from '../app/components/Header/Header';
import Timeline from '../app/components/Timeline/Timeline';
import { formatPerson, formatTime, formatEvent } from '../scripts/formatData';

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

Page.getInitialProps = async ({ query: { data } }) => {
  const {
    personCollection: { items: persons },
    timeCollection: { items: times },
    eventCollection: { items: events },
  } = data;

  return {
    persons: persons.map(person => formatPerson(person)),
    times: times.map(time => formatTime(time)),
    events: events.map(event => formatEvent(event)),
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
