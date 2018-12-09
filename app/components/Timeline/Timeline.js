import React, { Component } from 'react';
import PropTypes from 'prop-types';

import updateTimeProps from './updateTimeProps';
import positionTimes from './positionTimes';
import sortObjectArray from '../../js/sortObjectArray';

import Time from '../Time/Time';
import Event from '../Event/Event';
import TimelineCursor from '../TimelineCursor/TimelineCursor';

import './Timeline.css';


class Timeline extends Component {
  static getDerivedStateFromProps(nextProps) {
    const { timespans } = nextProps;
    const times = timespans.map(time => updateTimeProps(time));

    const sortedTimes = sortObjectArray(times, 'pixelStart');

    const positionedTimes = positionTimes(sortedTimes);

    return {
      times: positionedTimes,
    };
  }

  render() {
    const {
      events,
      activeElement,
      changeSidebarContent,
    } = this.props;

    const {
      times,
    } = this.state;

    const scaleNumberNegativ = [];
    for (let i = 0; i <= 41; i += 1) {
      scaleNumberNegativ.push(<div className="Timeline-scaleNumber" key={i}>{i * -100 }</div>);
    }

    const scaleNumberPositive = [];
    for (let i = 1; i <= 21; i += 1) {
      scaleNumberPositive.push(<div className="Timeline-scaleNumber" key={i}>{i * 100 }</div>);
    }

    return (
      <div className="Timeline" id="timeline">
        <div className="Timeline-scale" />

        <div className="Timeline-numbers">
          <div className="Timeline-negativeNumbers">
            {scaleNumberNegativ}
          </div>
          <div className="Timeline-positiveNumbers">
            {scaleNumberPositive}
          </div>
        </div>

        <div className="Timeline-content" id="timeline">
          { events && events.map(({ id, ...event }, key) => (
            <Event
              {...event}
              key={id}
              id={id}
              isActive={id === activeElement}
              tabIndex={key}
              handleElementClick={() => changeSidebarContent(id)} />
          ))}

          { times && times.map(({ id, ...time }) => (
            <Time
              key={id}
              id={id}
              {...time}
              isActive={id === activeElement}
              handleElementClick={() => changeSidebarContent(id)} />
          ))}
        </div>

        <TimelineCursor />
      </div>
    );
  }
}

Timeline.defaultProps = {
  persons: undefined,
  times: undefined,
  events: undefined,
  activeElement: undefined,
};

Timeline.propTypes = {
  persons: PropTypes.array,
  times: PropTypes.array,
  events: PropTypes.array,
  activeElement: PropTypes.string,
  changeSidebarContent: PropTypes.func.isRequired,
};

export default Timeline;
