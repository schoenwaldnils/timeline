import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { pixelToYear } from '../../js/calcTimes';

import Time from '../Time/Time';
import Event from '../Event/Event';

import './Timeline.css';
import { ourTime } from '../../js/utils';


class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      cursorPositionLeft: -1,
      cursorYear: undefined,
    };
    this.cursor = React.createRef();
  }

  componentDidMount() {
    this.handleCursorMovement();
  }

  handleCursorMovement = () => {
    let { cursorPositionLeft, cursorYear } = this.state;
    let ticking = false;

    document.addEventListener('mousemove', ({ pageX }) => {
      cursorPositionLeft = pageX;
      const scrollPosition = JSON.parse(window.sessionStorage.getItem('scrollPosition'));
      const left = scrollPosition ? scrollPosition.left : 0;
      cursorYear = pixelToYear(left + pageX);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.setState({
            cursorPositionLeft,
            cursorYear,
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  render() {
    const {
      persons,
      times,
      events,
      activeElement,
      changeSidebarContent,
    } = this.props;

    const {
      cursorPositionLeft,
      cursorYear,
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

          { persons && persons.map(({ id, ...person }) => (
            <Time
              key={id}
              id={id}
              {...person}
              type="person"
              isActive={id === activeElement}
              handleElementClick={() => changeSidebarContent(id)} />
          ))}

          { times && times.map(({ id, ...time }) => (
            <Time
              key={id}
              id={id}
              {...time}
              type="time"
              isActive={id === activeElement}
              handleElementClick={() => changeSidebarContent(id)} />
          ))}
        </div>

        { cursorYear &&
          <div
            className="Timeline-cursor"
            style={{
              '--Timeline-scale-position-left': `${cursorPositionLeft}px`,
              '--Timeline-scale-year': `'${ourTime(cursorYear)}'`,
            }}
            ref={this.cursor} />
          }
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
