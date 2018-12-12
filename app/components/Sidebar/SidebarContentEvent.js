import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ourTime } from '../../js/utils';
import t from '../../js/translate';

const SidebarContentEvent = ({
  name, year, wolLink, content,
}) => (
  <Fragment>
    <h1 className="Sidebar-title">{name}</h1>

    <table>
      <tbody>
        <tr>
          <td className="Sidebar-tableCell">{t('time.year')}:</td>
          <td className="Sidebar-tableCell">
            {ourTime(year)}
          </td>
        </tr>
      </tbody>
    </table>

    { wolLink &&
      <a href={wolLink} target="_blank" rel="noopener noreferrer">WOL-link</a>
    }

    { content &&
      <div className="Sidebar-richText u-richText" dangerouslySetInnerHTML={{ __html: content }} />
    }
  </Fragment>
);

SidebarContentEvent.defaultProps = {
  name: undefined,
  year: undefined,
  wolLink: undefined,
  content: undefined,
};

SidebarContentEvent.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  wolLink: PropTypes.string,
  content: PropTypes.string,
};

export default SidebarContentEvent;
