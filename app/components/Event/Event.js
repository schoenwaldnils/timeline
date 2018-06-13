import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ourTime } from '../../js/utils';
import './Event.css';

const Event = ({
  className, tabIndex, name, year,
}) => {
  return (
    <div className={`Event ${className}`} tabIndex={tabIndex}>
      <div className="Event-title">{name}<br />{`(${ourTime(year)})`}</div>
    </div>
  );
};

Event.propTypes = {
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  name: PropTypes.string,
  year: PropTypes.number,
};

Event.defaultProps = {
  className: null,
  tabIndex: 0,
  name: null,
  year: null,
};

const StyledEvent = styled(Event)`
  margin-left: ${props => props.year + 4026}px;
`;

export default StyledEvent;
