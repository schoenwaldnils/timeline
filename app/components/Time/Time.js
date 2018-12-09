import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styled from 'styled-components';

import { SCALE_YEARS_BEFORE_ZERO } from '../../data/defaults';

import './Time.css';

class Time extends PureComponent {
  render() {
    const {
      id,
      type,
      isActive,
      className,
      name,
      startYear,
      duration,
      handleElementClick,
    } = this.props;

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

    if (!startYear || !duration) return null;

    return (
      <div
        id={id}
        className={timeClassnames}
        role="button"
        tabIndex={0}
        onKeyUp={e => e.keyCode === 13 && handleElementClick}
        onClick={handleElementClick}>
        <div className="Time-name">
          { name }
        </div>
      </div>
    );
  }
}

Time.defaultProps = {
  isActive: false,
  className: undefined,
  startYear: undefined,
  duration: undefined,
};

Time.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'time',
    'person',
  ]).isRequired,
  isActive: PropTypes.bool,
  duration: PropTypes.number,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  startYear: PropTypes.number,
  handleElementClick: PropTypes.func.isRequired,
};

const StyledTime = styled(Time)(({
  calcedStart,
  top = 0,
  duration,
  background,
}) => ({
  width: `${duration}px`,
  top: `calc(${top} * (2em + 1px) + 100px)`,
  left: `${calcedStart + SCALE_YEARS_BEFORE_ZERO}px`,
  background,
}));

export default StyledTime;
