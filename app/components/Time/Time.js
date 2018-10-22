import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styled from 'styled-components';

import './Time.css';

const Time = (props) => {
  const {
    type,
    isActive,
    className,
    children,
    tabIndex,
    name,
    startYear,
    birthVagueness,
    deathVagueness,
    alive,
    duration,
    handleElementClick,
  } = props;

  const timeClassnames = cs(
    'Time',
    `Time--${type}`,
    {
      'Time--startUnsure': birthVagueness,
      'Time--endUnsure': deathVagueness || alive,
      'is-active': isActive,
    },
    [className],
  );

  if (!startYear || !duration) return null;

  return (
    <div className={timeClassnames} role="button" tabIndex={tabIndex} onKeyUp={() => {}} onClick={handleElementClick}>
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
};

Time.defaultProps = {
  isActive: false,
  className: undefined,
  children: undefined,
  tabIndex: 0,
  startYear: undefined,
  birthVagueness: undefined,
  deathVagueness: undefined,
  alive: false,
  duration: undefined,
};

Time.propTypes = {
  type: PropTypes.oneOf([
    'time',
    'person',
  ]).isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  tabIndex: PropTypes.number,
  name: PropTypes.string.isRequired,
  startYear: PropTypes.number,
  birthVagueness: PropTypes.string,
  alive: PropTypes.bool,
  deathVagueness: PropTypes.string,
  duration: PropTypes.number,
  handleElementClick: PropTypes.func.isRequired,
};

const StyledTime = styled(Time)`
  width: ${props => props.duration}px;
  margin-left: ${props => props.startYear + 4026}px;
`;

export default StyledTime;
