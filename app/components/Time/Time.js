import React, { PureComponent } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styled from 'styled-components';

import { timeperiod } from '../../js/utils';

import './Time.css';

function calcDuration(type, startYear, endYear, stillActive) {
  if (startYear && endYear) {
    return timeperiod(
      startYear,
      endYear,
    );
  } else if (startYear && (stillActive || type === 'time')) {
    return timeperiod(
      startYear,
      new Date().getFullYear(),
    );
  }
  return undefined;
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

    const duration = calcDuration(type, startYear, endYear, stillActive);

    const timeClassnames = cs(
      'Time',
      `Time--${type}`,
      {
        'Time--startUnsure': startVagueness,
        'Time--endUnsure': endVagueness || stillActive,
        'is-active': isActive,
      },
      [className],
    );

    if (!startYear || !duration) return null;

    return (
      <div
        className={timeClassnames}
        // style={{
        //   '--startVagueness': startVagueness,
        //   '--endVagueness': endVagueness,
        // }}
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
  type, startYear, endYear, stillActive,
}) => {
  const duration = calcDuration(type, startYear, endYear, stillActive);
  return ({
    width: `${duration}px`,
    marginLeft: `${startYear + 4026}px`,
  });
});

export default StyledTime;
