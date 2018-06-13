import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styled from 'styled-components';

import './Time.css';
import { ourTime } from '../../js/utils';

const Time = (props) => {
  const {
    type,
    isActive,
    className,
    children,
    tabIndex,
    name,
    startYear,
    startUnsure,
    endYear,
    endUnsure,
    duration,
    handleElementClick,
  } = props;

  const timeClassnames = cs(
    'Time',
    `Time--${type}`,
    {
      'Time--startUnsure': startUnsure,
      'Time--endUnsure': endUnsure,
      'is-active': isActive,
    },
    [className],
  );

  if (!startYear || !duration ) return null;

  return (
    <div className={timeClassnames} tabIndex={tabIndex} onClick={handleElementClick}>
      { name }
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
  startUnsure: false,
  endYear: undefined,
  endUnsure: false,
  duration: undefined,
};

Time.propTypes = {
  type: PropTypes.oneOf([
    'time',
    'person',
  ]),
  isActive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  tabIndex: PropTypes.number,
  name: PropTypes.string.isRequired,
  startYear: PropTypes.number,
  startUnsure: PropTypes.bool,
  endYear: PropTypes.number,
  endUnsure: PropTypes.bool,
  duration: PropTypes.number,
  handleElementClick: PropTypes.func.isRequired,
};

const StyledTime = styled(Time)`
  width: ${props => props.duration}px;
  margin-left: ${props => props.startYear + 4026}px;
`;

export default StyledTime;
