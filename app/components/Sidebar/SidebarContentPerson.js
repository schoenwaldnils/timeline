import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ourTime, timeperiod } from '../../js/utils';

const SidebarContentPerson = (props) => {
  const {
    name,
    avatar: image,
    startYear,
    startVagueness,
    endYear,
    endVagueness,
    father,
    mother,
    childs,
  } = props;

  const age = timeperiod(startYear, (endYear || new Date().getFullYear()));


  return (
    <Fragment>
      { image &&
        <picture>
          <source srcSet={`${image}?w=480&fl=progressive`} media="(min-resolution: 120dpi)" />
          <img className="Sidebar-image" src={`${image}?w=320&fl=progressive`} alt={`Bild von ${name}`} />
        </picture>
      }

      <h1 className="Sidebar-title">{name}</h1>

      <table>
        <tbody>

          <tr>
            <td className="Sidebar-tableCell">Geboren:</td>
            <td className="Sidebar-tableCell">
              {ourTime(startYear)}{startVagueness && `(${startVagueness})`}
            </td>
          </tr>

          { endYear &&
            <tr>
              <td className="Sidebar-tableCell">Gestorben:</td>
              <td className="Sidebar-tableCell">
                {ourTime(endYear)} {endVagueness && `(${endVagueness})`}
              </td>
            </tr>
          }

          <tr>
            <td className="Sidebar-tableCell">Lebensdauer:</td>
            <td className="Sidebar-tableCell">{age} Jahre</td>
          </tr>

          { father &&
            <tr>
              <td className="Sidebar-tableCell">Vater:</td>
              <td className="Sidebar-tableCell">
                {father}
              </td>
            </tr>
          }

          { mother &&
            <tr>
              <td className="Sidebar-tableCell">Mutter:</td>
              <td className="Sidebar-tableCell">
                {mother}
              </td>
            </tr>
          }

          { childs.length > 0 &&
            <tr>
              <td className="Sidebar-tableCell">Kinder:</td>
              <td className="Sidebar-tableCell">
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

SidebarContentPerson.defaultProps = {
  avatar: undefined,
  startYear: undefined,
  startVagueness: undefined,
  endYear: undefined,
  endVagueness: undefined,
  father: undefined,
  mother: undefined,
  childs: [],
};

SidebarContentPerson.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  startYear: PropTypes.number,
  startVagueness: PropTypes.string,
  endYear: PropTypes.number,
  endVagueness: PropTypes.string,
  father: PropTypes.string,
  mother: PropTypes.string,
  childs: PropTypes.array,
};

export default SidebarContentPerson;
