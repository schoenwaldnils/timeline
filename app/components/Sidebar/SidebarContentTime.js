import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ourTime } from '../../js/utils';
import t from '../../js/translate';

const SidebarContentTime = ({
  name, startYear, endYear, duration,
}) => {
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
    </Fragment>
  );
};

SidebarContentTime.defaultProps = {
  name: undefined,
  startYear: undefined,
  endYear: undefined,
  duration: undefined,
};

SidebarContentTime.propTypes = {
  name: PropTypes.string,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
  duration: PropTypes.number,
};

export default SidebarContentTime;
