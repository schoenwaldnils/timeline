import React from 'react';
import PropTypes from 'prop-types';
import Person from '../Person/Person';
import Time from '../Time/Time';
import Event from '../Event/Event';
import stylesheet from './Timeline.css';

const Timeline = ({ persons, times, events }) => {
  const scaleNumberNegativ = [];
  for (let i = 0; i <= 40; i += 1) {
    scaleNumberNegativ.push(<div className="Timeline-scaleNumber" key={i}>{i * -100 }</div>);
  }

  const scaleNumberPositive = [];
  for (let i = 1; i <= 20; i += 1) {
    scaleNumberPositive.push(<div className="Timeline-scaleNumber" key={i}>{i * 100 }</div>);
  }

  return (
    <div className="Timeline" id="timeline">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="Timeline-scale">
        <div className="Timeline-negativeNumbers">
          {scaleNumberNegativ}
        </div>
        <div className="Timeline-positiveNumbers">
          {scaleNumberPositive}
        </div>
      </div>
      {events && events.map((event, key) => <Event {...event} key={event.name} tabIndex={key} />)}
      {persons && persons.map(
        (person, key) => <Person {...person} key={person.name} tabIndex={key} />,
      )}
      {times && times.map(
        (time, key) => <Time {...time} key={time.name} tabIndex={key} />,
      )}
    </div>
  );
};

Timeline.propTypes = {
  persons: PropTypes.array,
  times: PropTypes.array,
  events: PropTypes.array,
};

Timeline.defaultProps = {
  persons: null,
  times: null,
  events: null,
};

export default Timeline;
