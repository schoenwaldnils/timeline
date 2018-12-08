import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ourTime } from '../../js/utils';
import { SCALE_YEARS_BEFORE_ZERO } from '../../data/defaults';
import { LanguageConsumer } from './../../js/context/lang-context';

import './Event.css';

const Event = ({
  id,
  className,
  tabIndex,
  name,
  year,
  handleElementClick,
}) => {
  return (
    <LanguageConsumer>
      {({ language } = {}) => (
        <div id={id} className={`Event ${className}`} tabIndex={tabIndex}>
          <div
            className="Event-title"
            role="button"
            tabIndex={0}
            onKeyUp={e => e.keyCode === 13 && handleElementClick}
            onClick={handleElementClick}>
            {name}<br />{`(${ourTime(year, language)})`}
          </div>
        </div>
      )}
    </LanguageConsumer>
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
  handleElementClick: PropTypes.func.isRequired,
};

const StyledEvent = styled(Event)`
  margin-left: ${props => props.year + SCALE_YEARS_BEFORE_ZERO}px;
`;

export default StyledEvent;
