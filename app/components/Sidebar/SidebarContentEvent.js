import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ourTime } from '../../js/utils';

const SidebarContentEvent = ({ name, year }) => (
  <Fragment>
    <h1 className="Sidebar-title">{name}</h1>

    <table>
      <tbody>
        <tr>
          <td className="Sidebar-tableCell">Jahr:</td>
          <td className="Sidebar-tableCell">
            {ourTime(year)}
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

SidebarContentEvent.defaultProps = {
  name: undefined,
  year: undefined,
};

SidebarContentEvent.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
};

export default SidebarContentEvent;
