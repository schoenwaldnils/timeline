import React, { Fragment } from 'react';
import paramCase from 'param-case';

import { ourTime } from '../../js/utils';

const TimeContentPerson = (props) => {
  const {
    name,
    image,
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

          { childs &&
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
      {/* <a className="Time-link" href={`/person/${paramCase(name)}`}>mehr ></a> */}
    </Fragment>
  );
};

export default TimeContentPerson;
