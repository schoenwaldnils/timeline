import React from 'react'
import PropTypes from 'prop-types'

import { ourTime, timeperiod } from '../../js/utils'
import t from '../../js/translate'

export const SidebarContentPerson = props => {
  const {
    name,
    avatar: image,
    startYear,
    startBlurriness,
    endYear,
    endBlurriness,
    spouse,
    father,
    mother,
    childs,
    changeSidebarContent,
  } = props

  let age

  if (startYear) {
    age = timeperiod(startYear, endYear || new Date().getFullYear())
  }

  return (
    <>
      {image && (
        <picture>
          <source
            srcSet={`${image}?w=480&fl=progressive`}
            media="(min-resolution: 120dpi)"
          />
          <img
            className="Sidebar-image"
            src={`${image}?w=320&fl=progressive`}
            alt={`Bild von ${name}`}
          />
        </picture>
      )}

      <h1 className="Sidebar-title">{name}</h1>

      <table className="Sidebar-table">
        <tbody>
          <tr>
            <td className="Sidebar-tableCell">{t('life.born')}:</td>
            <td className="Sidebar-tableCell">
              {startYear && (
                <>
                  {startBlurriness && t('misc.approx')} {ourTime(startYear)}{' '}
                  {startBlurriness && `(${startBlurriness})`}
                </>
              )}
              {!startYear && t('misc.unnown')}
            </td>
          </tr>

          <tr>
            <td className="Sidebar-tableCell">{t('life.died')}:</td>
            <td className="Sidebar-tableCell">
              {endYear && (
                <>
                  {endBlurriness && t('misc.approx')} {ourTime(endYear)}{' '}
                  {endBlurriness && `(${endBlurriness})`}
                </>
              )}
              {!endYear && t('misc.unnown')}
            </td>
          </tr>

          <tr>
            <td className="Sidebar-tableCell">{t('life.span')}:</td>
            <td className="Sidebar-tableCell">
              {age && !startBlurriness && !endBlurriness
                ? `${age} ${t('time.years')}`
                : t('misc.unnown')}
            </td>
          </tr>

          {spouse.length > 0 && (
            <tr>
              <td className="Sidebar-tableCell">{t('relations.spouse')}:</td>
              <td className="Sidebar-tableCell">
                <ul>
                  {spouse.map(({ id, name: spouseName }) => (
                    <a
                      key={id}
                      className="u-link"
                      onKeyUp={e =>
                        e.keyCode === 13 && changeSidebarContent(id)
                      }
                      onClick={() => changeSidebarContent(id)}
                      role="button"
                      tabIndex={0}
                    >
                      <li>{spouseName}</li>
                    </a>
                  ))}
                </ul>
              </td>
            </tr>
          )}

          {father && (
            <tr>
              <td className="Sidebar-tableCell">{t('relations.father')}:</td>
              <td className="Sidebar-tableCell">
                <a
                  className="u-link"
                  onKeyUp={e =>
                    e.keyCode === 13 && changeSidebarContent(father.id)
                  }
                  onClick={() => changeSidebarContent(father.id)}
                  role="button"
                  tabIndex={0}
                >
                  {father.name}
                </a>
              </td>
            </tr>
          )}

          {mother && (
            <tr>
              <td className="Sidebar-tableCell">{t('relations.mother')}:</td>
              <td className="Sidebar-tableCell">
                <a
                  className="u-link"
                  onKeyUp={e =>
                    e.keyCode === 13 && changeSidebarContent(mother.id)
                  }
                  onClick={() => changeSidebarContent(mother.id)}
                  role="button"
                  tabIndex={0}
                >
                  {mother.name}
                </a>
              </td>
            </tr>
          )}

          {childs.length > 0 && (
            <tr>
              <td className="Sidebar-tableCell">{t('relations.children')}:</td>
              <td className="Sidebar-tableCell">
                <ul>
                  {childs.map(({ id, name: childName }) => (
                    <a
                      key={id}
                      className="u-link"
                      onKeyUp={e =>
                        e.keyCode === 13 && changeSidebarContent(id)
                      }
                      onClick={() => changeSidebarContent(id)}
                      role="button"
                      tabIndex={0}
                    >
                      <li>{childName}</li>
                    </a>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

SidebarContentPerson.defaultProps = {
  avatar: undefined,
  startYear: undefined,
  startBlurriness: undefined,
  endYear: undefined,
  endBlurriness: undefined,
  spouse: [],
  father: undefined,
  mother: undefined,
  childs: [],
}

SidebarContentPerson.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  startYear: PropTypes.number,
  startBlurriness: PropTypes.string,
  endYear: PropTypes.number,
  endBlurriness: PropTypes.string,
  spouse: PropTypes.array,
  father: PropTypes.object,
  mother: PropTypes.object,
  childs: PropTypes.array,
  changeSidebarContent: PropTypes.func.isRequired,
}

export default SidebarContentPerson
