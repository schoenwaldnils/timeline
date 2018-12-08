import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ourTime } from '../../js/utils';

const SidebarContentEvent = ({ name, year, wolLink }) => (
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

    { wolLink &&
      <a href={wolLink} target="_blank" rel="noopener noreferrer">WOL-link</a>
    }
  </Fragment>
);

SidebarContentEvent.defaultProps = {
  name: undefined,
  year: undefined,
  wolLink: undefined,
};

SidebarContentEvent.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  wolLink: PropTypes.string,
};

export default SidebarContentEvent;
