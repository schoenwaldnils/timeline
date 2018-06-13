import React, { Fragment } from 'react';

import { ourTime } from '../../js/utils';

const TimeContentTime = ({ startYear, endYear, duration }) => (
  <Fragment>
    <table>
      <tbody>
        <tr>
          <td className="Time-tableCell">Start:</td>
          <td className="Time-tableCell">
            {ourTime(startYear)}
          </td>
        </tr>
        <tr>
          <td className="Time-tableCell">Ende:</td>
          <td className="Time-tableCell">
            {ourTime(endYear)}
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
  </Fragment>
);

export default TimeContentTime;
