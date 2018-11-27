import React, { PureComponent } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styled from 'styled-components';

import { timeperiod } from '../../js/utils';
import { calcTimes } from '../../js/calcTimes';

import './Time.css';


function generateGradient({
  calcedStart, calcedStartCertain, calcedEndCertain, calcedEnd, duration,
}) {
  if (!calcedStartCertain && !calcedEndCertain) {
    return '';
  }

  let startPx = 0;
  let endPx = startPx + duration;

  let gradientStart = '';
  let gradientEnd = '';

  if (calcedStartCertain) {
    startPx = calcedStartCertain - calcedStart;
    gradientStart = 'transparent 0px, ';
  }

  if (calcedEndCertain) {
    endPx = calcedEndCertain - calcedStart;
    gradientEnd = `transparent ${calcedEnd - calcedStart}px`;
  }

  return `
  linear-gradient(
    to right,
    ${gradientStart}
    var(--Time-color)
    ${startPx}px,
    var(--Time-color)
    ${endPx}px,
    ${gradientEnd})`;
}

class Time extends PureComponent {
  handleEnterKey = ({ keyCode }) => {
    if (keyCode === 13) {
      this.props.handleElementClick();
    }
  }

  render() {
    const {
      type,
      isActive,
      className,
      children,
      name,
      startYear,
      startVagueness,
      endYear,
      endVagueness,
      stillActive,
      handleElementClick,
    } = this.props;

    const {
      calcedStart,
      calcedEnd,
    } = calcTimes({
      type, startYear, startVagueness, endYear, endVagueness, stillActive,
    });

    const timeClassnames = cs(
      'Time',
      `Time--${type}`,
      {
        // 'Time--startUnsure': startVagueness,
        // 'Time--endUnsure': endVagueness || stillActive,
        'is-active': isActive,
      },
      [className],
    );

    const duration = timeperiod(calcedStart, calcedEnd);

    if (!startYear || !duration) return null;

    return (
      <div
        className={timeClassnames}
        role="button"
        tabIndex={0}
        onKeyUp={() => {}}
        onClick={handleElementClick}>
        <div className="Time-name">
          { name }
        </div>
        <Fade collapse when={isActive} duration={300}>
          <div className="Time-info">
            { children }
          </div>
        </Fade>
      </div>
    );
  }
}

Time.defaultProps = {
  isActive: false,
  className: undefined,
  children: undefined,
  startYear: undefined,
  startVagueness: undefined,
  endYear: undefined,
  endVagueness: undefined,
  stillActive: false,
};

Time.propTypes = {
  type: PropTypes.oneOf([
    'time',
    'person',
  ]).isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  startYear: PropTypes.number,
  startVagueness: PropTypes.string,
  endYear: PropTypes.number,
  endVagueness: PropTypes.string,
  stillActive: PropTypes.bool,
  handleElementClick: PropTypes.func.isRequired,
};

const StyledTime = styled(Time)(({
  type, startYear, startVagueness, endYear, endVagueness, stillActive,
}) => {
  const {
    calcedStart,
    calcedStartCertain,
    calcedEndCertain,
    calcedEnd,
  } = calcTimes({
    type, startYear, startVagueness, endYear, endVagueness, stillActive,
  });
  const duration = timeperiod(calcedStart, calcedEnd);
  const background = generateGradient({
    calcedStart, calcedStartCertain, calcedEndCertain, calcedEnd, duration,
  });


  return ({
    width: `${duration}px`,
    marginLeft: `${calcedStart + 4100}px`,
    background,
  });
});

export default StyledTime;
