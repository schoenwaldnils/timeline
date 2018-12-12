import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


import { ourTime, timeperiod } from '../../js/utils';
import t from '../../js/translate';

const SidebarContentPerson = (props) => {
  const {
    name,
    avatar: image,
    startYear,
    startVagueness,
    endYear,
    endVagueness,
    spouse,
    father,
    mother,
    childs,
    wolLink,
    content,
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

      <table className="Sidebar-table">
        <tbody>

          <tr>
            <td className="Sidebar-tableCell">{t('life.born')}:</td>
            <td className="Sidebar-tableCell">
              {startYear &&
                <Fragment>
                  {startVagueness && t('misc.approx')}
                  {' '}
                  {ourTime(startYear)}
                  {' '}
                  {startVagueness && `(${startVagueness})`}
                </Fragment>
              }
              {!startYear && t('misc.unnown')}
            </td>
          </tr>

          <tr>
            <td className="Sidebar-tableCell">{t('life.died')}:</td>
            <td className="Sidebar-tableCell">
              {endYear &&
                <Fragment>
                  {endVagueness && t('misc.approx')}
                  {' '}
                  {ourTime(endYear)}
                  {' '}
                  {endVagueness && `(${endVagueness})`}
                </Fragment>
              }
              {!endYear && t('misc.unnown')}
            </td>
          </tr>

          <tr>
            <td className="Sidebar-tableCell">{t('life.span')}:</td>
            <td className="Sidebar-tableCell">
              {age && !startVagueness && !endVagueness ? `${age} ${t('time.years')}` : t('misc.unnown')}
            </td>
          </tr>

          { spouse.length > 0 &&
            <tr>
              <td className="Sidebar-tableCell">{t('relations.spouse')}:</td>
              <td className="Sidebar-tableCell">
                <ul>
                  { spouse.map(({ id, name: spouseName }) => (
                    <a
                      key={id}
                      onKeyUp={e => e.keyCode === 13 && changeSidebarContent(id)}
                      onClick={() => changeSidebarContent(id)}
                      role="button"
                      tabIndex={0}>
                      <li>{spouseName}</li>
                    </a>
                  ))}
                </ul>
              </td>
            </tr>
          }

          { father &&
            <tr>
              <td className="Sidebar-tableCell">{t('relations.father')}:</td>
              <td className="Sidebar-tableCell">
                <a
                  onKeyUp={e => e.keyCode === 13 && changeSidebarContent(father.id)}
                  onClick={() => changeSidebarContent(father.id)}
                  role="button"
                  tabIndex={0}>
                  {father.name}
                </a>
              </td>
            </tr>
          }

          { mother &&
            <tr>
              <td className="Sidebar-tableCell">{t('relations.mother')}:</td>
              <td className="Sidebar-tableCell">
                <a
                  onKeyUp={e => e.keyCode === 13 && changeSidebarContent(mother.id)}
                  onClick={() => changeSidebarContent(mother.id)}
                  role="button"
                  tabIndex={0}>
                  {mother.name}
                </a>
              </td>
            </tr>
          }

          { childs.length > 0 &&
            <tr>
              <td className="Sidebar-tableCell">{t('relations.children')}:</td>
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

      { wolLink &&
        <a href={wolLink} target="_blank" rel="noopener noreferrer">WOL-link</a>
      }

      { content &&
        <div className="Sidebar-richText u-richText" dangerouslySetInnerHTML={{ __html: content }} />
      }
    </Fragment>
  );
};

SidebarContentPerson.defaultProps = {
  avatar: undefined,
  startYear: undefined,
  startVagueness: undefined,
  endYear: undefined,
  endVagueness: undefined,
  spouse: [],
  father: undefined,
  mother: undefined,
  childs: [],
  wolLink: undefined,
  content: undefined,
};

SidebarContentPerson.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  startYear: PropTypes.number,
  startVagueness: PropTypes.string,
  endYear: PropTypes.number,
  endVagueness: PropTypes.string,
  spouse: PropTypes.array,
  father: PropTypes.object,
  mother: PropTypes.object,
  childs: PropTypes.array,
  wolLink: PropTypes.string,
  content: PropTypes.string,
  changeSidebarContent: PropTypes.func.isRequired,
};

export default SidebarContentPerson;
