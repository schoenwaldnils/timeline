import React, { Component } from 'react';
import PropTypes from 'prop-types';

import updateTimeProps from './updateTimeProps';
import updateEventProps from './updateEventProps';
import positionTimes from './positionTimes';
import positionEvents from './positionEvents';
import sortObjectArray from '../../js/sortObjectArray';

import Time from '../Time/Time';
import Event from '../Event/Event';
import TimelineCursor from '../TimelineCursor/TimelineCursor';

import './Timeline.css';


class Timeline extends Component {
  state = {
    times: [],
    timesHeight: 1,
    eventsHeight: 1,
  }

  static getDerivedStateFromProps(nextProps) {
    const { timespans, events: rawEvents } = nextProps;

    const times = timespans.map(time => updateTimeProps(time));
    const events = rawEvents.map((event, index) => updateEventProps({ ...event, zIndex: rawEvents.length - index }));

    const sortedTimes = sortObjectArray(times, 'pixelStart');
    const sortedEvents = sortObjectArray(events, 'pixelYear');

    const { timesHeight, times: positionedTimes } = positionTimes(sortedTimes);
    const { eventsHeight, events: positionedEvents } = positionEvents(sortedEvents);

    console.log(positionedEvents);

    return {
      times: positionedTimes,
      timesHeight,
      events: positionedEvents,
      eventsHeight,
    };
  }

  render() {
    const {
      activeElement,
      changeSidebarContent,
    } = this.props;

    const {
      times,
      timesHeight,
      events,
      eventsHeight,
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
      <div className="Timeline">
        <div className="Timeline-scale" />

        <div className="Timeline-numbers">
          <div className="Timeline-negativeNumbers">
            {scaleNumberNegativ}
          </div>
          <div className="Timeline-positiveNumbers">
            {scaleNumberPositive}
          </div>
        </div>

        <div className="Timeline-content">
          { events &&
            <div
              className="Timeline-wrapEvents"
              style={{
                '--Timeline-eventsHeight': eventsHeight,
              }}>
              { events.map(({ id, ...event }, key) => (
                <Event
                  {...event}
                  key={id}
                  id={id}
                  isActive={id === activeElement}
                  tabIndex={key}
                  handleElementClick={() => changeSidebarContent(id)} />
              ))}
            </div>
          }

          { times &&
            <div
              className="Timeline-wrapTimes"
              style={{
                '--Timeline-timesHeight': timesHeight,
              }}>
              { times.map(({ id, ...time }) => (
                <Time
                  key={id}
                  id={id}
                  {...time}
                  isActive={id === activeElement}
                  handleElementClick={() => changeSidebarContent(id)} />
              ))}
            </div>
          }
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
