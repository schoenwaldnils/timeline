import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ourTime, timeperiod } from '../../js/utils';

const SidebarContentTime = ({
  name, startYear, endYear,
}) => {
  const duration = timeperiod(startYear, (endYear || new Date().getFullYear()));

  return (
    <Fragment>
      <h1 className="Sidebar-title">{name}</h1>

      <table>
        <tbody>
          <tr>
            <td className="Sidebar-tableCell">Start:</td>
            <td className="Sidebar-tableCell">
              {ourTime(startYear)}
            </td>
          </tr>
          <tr>
            <td className="Sidebar-tableCell">Ende:</td>
            <td className="Sidebar-tableCell">
              {endYear ? ourTime(endYear) : 'andauernd'}
            </td>
          </tr>
          <tr>
            <td className="Sidebar-tableCell">Dauer:</td>
            <td className="Sidebar-tableCell">
              {duration} Jahre
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
};

SidebarContentTime.propTypes = {
  name: PropTypes.string,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
};

export default SidebarContentTime;
