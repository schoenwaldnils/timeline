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
    changeSidebarContent,
  } = props;

  let age;

  if (startYear) {
    age = timeperiod(startYear, (endYear || new Date().getFullYear()));
  }


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
              {startYear && ourTime(startYear)}
              {' '}
              {startYear && startVagueness && `(${startVagueness})`}
              {!startYear && 'unbekannt'}
            </td>
          </tr>

          <tr>
            <td className="Sidebar-tableCell">Gestorben:</td>
            <td className="Sidebar-tableCell">
              {endYear && ourTime(endYear)}
              {' '}
              {endYear && endVagueness && `(${endVagueness})`}
              {!endYear && 'unbekannt'}
            </td>
          </tr>

          <tr>
            <td className="Sidebar-tableCell">Lebensdauer:</td>
            <td className="Sidebar-tableCell">{age ? `${age} Jahre` : 'unbekannt'}</td>
          </tr>

          <tr>
            <td className="Sidebar-tableCell">Vater:</td>
            <td className="Sidebar-tableCell">
              { father ? (
                <a
                  onKeyUp={e => e.keyCode === 13 && changeSidebarContent(father.id)}
                  onClick={() => changeSidebarContent(father.id)}
                  role="button"
                  tabIndex={0}>
                  {father.name}
                </a>
              ) : (
                'unbekannt'
              )}
            </td>
          </tr>

          <tr>
            <td className="Sidebar-tableCell">Mutter:</td>
            <td className="Sidebar-tableCell">
              { mother ? (
                <a
                  onKeyUp={e => e.keyCode === 13 && changeSidebarContent(mother.id)}
                  onClick={() => changeSidebarContent(mother.id)}
                  role="button"
                  tabIndex={0}>
                  {mother.name}
                </a>
              ) : (
                'unbekannt'
              )}
            </td>
          </tr>

          { childs.length > 0 &&
            <tr>
              <td className="Sidebar-tableCell">Kinder:</td>
              <td className="Sidebar-tableCell">
                <ul>
                  { childs.map(({ id, name: childName }) => (
                    <a
                      key={id}
                      onKeyUp={e => e.keyCode === 13 && changeSidebarContent(id)}
                      onClick={() => changeSidebarContent(id)}
                      role="button"
                      tabIndex={0}>
                      <li>{childName}</li>
                    </a>
                  ))}
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
  father: PropTypes.object,
  mother: PropTypes.object,
  childs: PropTypes.array,
  changeSidebarContent: PropTypes.func.isRequired,
};

export default SidebarContentPerson;
