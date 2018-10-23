import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Time from '../Time/Time';
import TimeContentPerson from '../Time/TimeContentPerson';
import TimeContentTime from '../Time/TimeContentTime';
import Event from '../Event/Event';

import './Timeline.css';


class Timeline extends Component {
  state = {
    activePersons: [],
    activeTimes: [],
    activeEvents: [],
  };

  handleElementClick = async (type, id) => {
    const { activePersons, activeTimes, activeEvents } = this.state;

    switch (type) {
      case 'person':
        if (!activePersons.includes(id)) {
          activePersons.push(id);
          await this.setState({ activePersons });
        } else {
          this.handleElementClose('person', id);
        }
        break;

      case 'time':
        if (!activeTimes.includes(id)) {
          activeTimes.push(id);
          this.setState({ activeTimes });
        } else {
          this.handleElementClose('time', id);
        }
        break;

      case 'event':
        if (!activeEvents.includes(id)) {
          activeEvents.push(id);
          this.setState({ activeEvents });
        } else {
          this.handleElementClose('event', id);
        }
        break;

      default:
        break;
    }
  }

  handleElementClose = (type = 'all', id = undefined) => {
    const { activePersons, activeTimes, activeEvents } = this.state;

    switch (type) {
      case 'person':
        if (!id) this.setState({ activePersons: [] });

        const indexPerson = activePersons.indexOf(id);
        if (indexPerson > -1) {
          activePersons.splice(indexPerson, 1);
          this.setState({ activePersons });
        }
        break;

      case 'time':
        if (!id) this.setState({ activeTimes: [] });

        const indexTime = activeTimes.indexOf(id);
        if (indexTime > -1) {
          activeTimes.splice(indexTime, 1);
          this.setState({ activeTimes });
        }
        break;

      case 'event':
        if (!id) this.setState({ activeEvents: [] });

        const indexEvent = activeEvents.indexOf(id);
        if (indexEvent > -1) {
          activeEvents.splice(indexEvent, 1);
          this.setState({ activeEvents });
        }
        break;

      case 'all':
      default:
        this.setState({
          activePersons: [],
          activeTimes: [],
          activeEvents: [],
        });
        break;
    }
  }

  render() {
    const { persons, times, events } = this.props;
    const { activePersons, activeTimes, activeEvents } = this.state;

    const scaleNumberNegativ = [];
    for (let i = 0; i <= 40; i += 1) {
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
          { events && events.map((eventData, key) => {
            const { id, ...event } = eventData;
            return (
              <Event
                {...event}
                isActive={activeEvents.includes(id)}
                key={id}
                tabIndex={key}
                handleElementClick={() => this.handleElementClick('event', id)} />
            );
          })}

          { persons && persons.map((personData, key) => {
            const { id, ...person } = personData;
            return (
              <Time
                {...person}
                type="person"
                isActive={activePersons.includes(id)}
                key={id}
                tabIndex={key}
                handleElementClick={() => this.handleElementClick('person', id)}>
                <TimeContentPerson {...person} />
              </Time>
            );
          })}

          { times && times.map((timeData, key) => {
            const { id, ...time } = timeData;
            return (
              <Time
                {...time}
                type="time"
                isActive={activeTimes.includes(id)}
                key={id}
                tabIndex={key}
                handleElementClick={() => this.handleElementClick('time', id)}>
                <TimeContentTime {...time} />
              </Time>
            );
          })}
        </div>
      </div>
    );
  }
}

Timeline.defaultProps = {
  persons: undefined,
  times: undefined,
  events: undefined,
};

Timeline.propTypes = {
  persons: PropTypes.array,
  times: PropTypes.array,
  events: PropTypes.array,
};

export default Timeline;
