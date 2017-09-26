import React from 'react';
import PropTypes from 'prop-types';
import Person from '../Person/Person';
import stylesheet from './Timeline.css';

const Timeline = ({ persons }) => {
  console.log(persons);
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
      { persons && persons.map(person => <Person {...person} key={person.name} />) }
    </div>
  );
};

Timeline.propTypes = {
  persons: PropTypes.array,
};

Timeline.defaultProps = {
  persons: null,
};

export default Timeline;
