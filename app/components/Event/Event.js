import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ourTime } from '../../js/utils';
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
        <div
          id={id}
          className={`Event ${className}`}
          tabIndex={tabIndex}
          role="button"
          onKeyUp={e => e.keyCode === 13 && handleElementClick}
          onClick={handleElementClick}>
          {name}<br />{`(${ourTime(year, language)})`}
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

const StyledEvent = styled(Event)(({
  top = 0,
  pixelYear,
  zIndex,
}) => ({
  top: `calc(${top} * (4em + 1px))`,
  left: `${pixelYear}px`,
  zIndex,
}));

export default StyledEvent;
