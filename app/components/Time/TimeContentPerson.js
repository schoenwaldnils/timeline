import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ourTime } from '../../js/utils';

const TimeContentPerson = (props) => {
  const {
    name,
    avatar: image,
    startYear: birth,
    endYear: death,
    duration: age,
    father,
    mother,
    childs,
  } = props;

  return (
    <Fragment>
      { image &&
        <picture>
          <source srcSet={`${image}?w=300&fl=progressive`} media="(min-resolution: 120dpi)" />
          <img className="Time-image" src={`${image}?w=150&fl=progressive`} alt={`Bild von ${name}`} />
        </picture>
      }

      <table>
        <tbody>

          <tr>
            <td className="Time-tableCell">Geboren:</td>
            <td className="Time-tableCell">
              {ourTime(birth)}
            </td>
          </tr>

          { death &&
            <tr>
              <td className="Time-tableCell">Gestorben:</td>
              <td className="Time-tableCell">
                {ourTime(death)}
              </td>
            </tr>
          }

          <tr>
            <td className="Time-tableCell">Lebensdauer:</td>
            <td className="Time-tableCell">{age} Jahre</td>
          </tr>

          { father &&
            <tr>
              <td className="Time-tableCell">Vater:</td>
              <td className="Time-tableCell">
                {father}
              </td>
            </tr>
          }

          { mother &&
            <tr>
              <td className="Time-tableCell">Mutter:</td>
              <td className="Time-tableCell">
                {mother}
              </td>
            </tr>
          }

          { childs.length > 0 &&
            <tr>
              <td className="Time-tableCell">Kinder:</td>
              <td className="Time-tableCell">
                <ul>
                  { childs.map(child => <li key={child}>{child}</li>)}
                </ul>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </Fragment>
  );
};

TimeContentPerson.defaultProps = {
  avatar: undefined,
  startYear: undefined,
  endYear: undefined,
  duration: undefined,
  father: undefined,
  mother: undefined,
  childs: [],
};

TimeContentPerson.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
  duration: PropTypes.number,
  father: PropTypes.string,
  mother: PropTypes.string,
  childs: PropTypes.array,
};

export default TimeContentPerson;
