import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesheet from './Time.css';

const Time = (props) => {
  const {
    className,
    tabIndex,
    name,
    startYear,
    endYear,
    duration,
  } = props;

  return (
    <div className={`Time ${className}`} tabIndex={tabIndex}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {name}
      <table className="Time-info">
        <tbody>
          <tr>
            <td className="Time-tableCell">Start:</td>
            <td className="Time-tableCell">
              {startYear <= 0 && `${startYear * -1} v.u.Z.`}
              {startYear >= 0 && `${startYear} u.Z.`}
            </td>
          </tr>
          <tr>
            <td className="Time-tableCell">Ende:</td>
            <td className="Time-tableCell">
              {endYear <= 0 && `${endYear * -1} v.u.Z.`}
              {endYear >= 0 && `${endYear} u.Z.`}
            </td>
          </tr>
          <tr>
            <td className="Time-tableCell">Dauer:</td>
            <td className="Time-tableCell">
              {duration} Jahre
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Time.propTypes = {
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  name: PropTypes.string,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
  duration: PropTypes.number,
};

Time.defaultProps = {
  className: null,
  tabIndex: 0,
  name: null,
  startYear: -4026,
  endYear: -3826,
  duration: 200,
};

const StyledTime = styled(Time)`
  width: ${props => props.duration}px;
  margin-left: ${props => props.startYear + 4026}px;
`;

export default StyledTime;
