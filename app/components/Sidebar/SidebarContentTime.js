import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ourTime, timeperiod } from '../../js/utils';
import t from '../../js/translate';

const SidebarContentTime = ({
  name, startYear, endYear, wolLink,
}) => {
  const duration = timeperiod(startYear, (endYear || new Date().getFullYear()));

  return (
    <Fragment>
      <h1 className="Sidebar-title">{name}</h1>

      <table>
        <tbody>
          <tr>
            <td className="Sidebar-tableCell">{t('time.start')}:</td>
            <td className="Sidebar-tableCell">
              {ourTime(startYear)}
            </td>
          </tr>
          <tr>
            <td className="Sidebar-tableCell">{t('time.end')}:</td>
            <td className="Sidebar-tableCell">
              {endYear ? ourTime(endYear) : t('time.ongoing')}
            </td>
          </tr>
          <tr>
            <td className="Sidebar-tableCell">{t('time.duration')}:</td>
            <td className="Sidebar-tableCell">
              {duration} {t('time.years')}
            </td>
          </tr>
        </tbody>
      </table>

      { wolLink &&
        <a href={wolLink} target="_blank" rel="noopener noreferrer">WOL-link</a>
      }
    </Fragment>
  );
};

SidebarContentTime.defaultProps = {
  name: undefined,
  startYear: undefined,
  endYear: undefined,
  wolLink: undefined,
};

SidebarContentTime.propTypes = {
  name: PropTypes.string,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
  wolLink: PropTypes.string,
};

export default SidebarContentTime;
