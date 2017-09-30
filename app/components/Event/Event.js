import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ourTime } from '../../js/utils';
import stylesheet from './Event.css';

const Event = ({ className, name, year }) => {
  return (
    <div className={`Event ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="Event-title">{name}<br />{`(${ourTime(year)})`}</div>
    </div>
  );
};

Event.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.number,
};

Event.defaultProps = {
  className: null,
  name: null,
  year: null,
};

const StyledEvent = styled(Event)`
  margin-left: ${props => props.year + 4026}px;
`;

export default StyledEvent;
