import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ourTime } from '../../js/utils';
import './Event.css';

const Event = ({
  id, className, tabIndex, name, year,
}) => {
  return (
    <div id={id} className={`Event ${className}`} tabIndex={tabIndex}>
      <div className="Event-title">{name}<br />{`(${ourTime(year)})`}</div>
    </div>
  );
};

Event.defaultProps = {
  className: null,
  tabIndex: 0,
  name: null,
  year: null,
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  name: PropTypes.string,
  year: PropTypes.number,
};

const StyledEvent = styled(Event)`
  margin-left: ${props => props.year + 4100}px;
`;

export default StyledEvent;
